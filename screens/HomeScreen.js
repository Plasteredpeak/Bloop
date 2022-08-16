import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {Colors} from '../Design/Colors';

import Auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

import {useIsFocused} from '@react-navigation/native';

import Add from '../assets/svgs/Add';
import Focus from '../assets/svgs/Focus';
import Cross from '../assets/svgs/cross';
import Edit from '../assets/svgs/edit.svg';
import Power from '../assets/svgs/power.svg';

import SocialCard from '../components/SocialCard';
import AddProfileModal from '../components/AddProfileModal';
import SocialModal from '../components/SocialModal';

import NfcManager, {NfcTech, Ndef} from 'react-native-nfc-manager';

const HomeScreen = props => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [social, setSocial] = useState('');
  const [socialVisible, setSocialVisible] = useState(false);
  const [socialSvg, setSocialSvg] = useState();
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [user, setUser] = useState('');
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();
  const [socialArray, setSocialArray] = useState([]);
  const [socialdoc, setSocialdoc] = useState();
  const [focus, setFocus] = useState(false);
  const [payload, setPayload] = useState('');
  const [selected, setSelected] = useState('');
  const [clicked, setClicked] = useState(false);

  async function writeNdef(value) {
    let result = false;
    console.log('im ready to write');
    console.log(value);

    try {
      // STEP 1
      await NfcManager.requestTechnology(NfcTech.Ndef);

      const bytes = Ndef.encodeMessage([Ndef.textRecord(value)]);

      if (bytes) {
        await NfcManager.ndefHandler // STEP 2
          .writeNdefMessage(bytes); // STEP 3
        result = true;
      }
    } catch (ex) {
      console.log(ex);
    } finally {
      // STEP 4
      NfcManager.cancelTechnologyRequest();
    }

    if (result) {
      console.log('success');
      setSelected('');
      setPayload('');
    } else {
      setClicked(false);
      console.log('fail or cancelled');
    }
  }

  const getData = async () => {
    await firestore()
      .collection('users')
      .doc(Auth().currentUser.uid)
      .get()
      .then(documentSnapshot => {
        console.log('User exists: ', documentSnapshot.exists);

        if (documentSnapshot.exists) {
          const doc = documentSnapshot.data();
          setName(doc.name);
          setUser(doc.username);
          setBio(doc.bio);
          setUrl(doc.image);
          //console.log('User data: ', documentSnapshot.data());
        }
      })
      .finally(() => setLoading(false));
    //console.log(userDocument);
  };

  const getSocial = async () => {
    await firestore()
      .collection('socials')
      .doc(Auth().currentUser.uid)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          setSocialdoc(documentSnapshot.data());
          setSocialArray(Object.keys(documentSnapshot.data()));
          //console.log('User data: ', socialdoc);
        }
      })
      .finally(() => setLoading(false));
    //console.log(userDocument);
  };

  useEffect(() => {
    if (isFocused) {
      console.log('called');
      getData();
    } else {
      NfcManager.cancelTechnologyRequest();
    }
  }, [isFocused]);

  useEffect(() => {
    getSocial();
  }, [socialArray]);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={[styles.header, styles.flex, {width: '100%'}]}>
        {url == '' ? (
          <Image
            style={{width: 80, height: 80, borderRadius: 50}}
            source={{
              uri: 'https://dwpdigital.blog.gov.uk/wp-content/uploads/sites/197/2018/02/Pippa-3.jpg',
            }}
          />
        ) : (
          <Image
            style={{width: 80, height: 80, borderRadius: 50}}
            source={{uri: url}}
          />
        )}

        <View
          style={{
            width: '70%',
            height: 100,
            flexDirection: 'column',
            justifyContent: 'space-evenly',
          }}>
          {name == '' ? (
            <Text
              style={{
                fontFamily: 'Montserrat',
                fontWeight: 'bold',
                fontSize: 24,
                color: Colors.Monochrome100,
              }}>
              Jennifer Attley
            </Text>
          ) : (
            <Text
              style={{
                fontFamily: 'Montserrat',
                fontWeight: 'bold',
                fontSize: 24,
                color: Colors.Monochrome100,
              }}>
              {name}
            </Text>
          )}
          {bio == '' ? (
            <Text
              style={{
                fontFamily: 'Montserrat',
                fontWeight: 'bold',
                fontSize: 16,
                color: Colors.Secondary1,
              }}>
              @jenny.attley21
            </Text>
          ) : (
            <Text
              style={{
                fontFamily: 'Montserrat',
                fontWeight: 'bold',
                fontSize: 14,
                color: Colors.Secondary1,
              }}>
              @{user}
            </Text>
          )}

          {bio == '' ? (
            <Text
              style={{
                fontFamily: 'Montserrat',
                fontSize: 12,
                color: Colors.Monochrome100,
              }}>
              This is a multiline bio about yourself. It should be limited to
              three lines of words which is about 110 chars.
            </Text>
          ) : (
            <Text
              style={{
                fontFamily: 'Montserrat',
                fontSize: 12,
                color: Colors.Monochrome100,
              }}>
              {bio}
            </Text>
          )}
        </View>
      </View>
      <View style={styles.flex}>
        {focus ? (
          <Text style={[styles.textFocus, {fontWeight: 'bold'}]}>
            Focus Mode
          </Text>
        ) : (
          <Text style={[styles.text, {fontWeight: 'bold'}]}>My Profile</Text>
        )}
        <View style={[styles.flex2, {width: '25%'}]}>
          {selected == '' ? (
            <TouchableOpacity
              onPress={() => {
                setFocus(true);
              }}>
              <Focus></Focus>
            </TouchableOpacity>
          ) : (
            <>
              <TouchableOpacity
                onPress={() => {
                  setClicked(true);
                  writeNdef(payload);
                }}
                disabled={clicked}>
                <Power fill={Colors.Accent1} width="24" height="24" />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  NfcManager.cancelTechnologyRequest();
                  setSelected('');
                  setFocus(true);
                  setClicked(false);
                }}>
                <Edit fill="#485164" width="24" height="24" />
              </TouchableOpacity>
            </>
          )}
          {focus ? (
            <TouchableOpacity
              onPress={() => {
                setFocus(false);
              }}>
              <Cross fill={Colors.Accent1} width="20" height="20" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                setSocial('');
                setSocialVisible(false);
                setModalVisible(true);
              }}>
              <Add></Add>
            </TouchableOpacity>
          )}
        </View>
      </View>
      {focus ? (
        <View style={styles.focus}>
          <Text style={{color: '#485164', fontSize: 18, fontWeight: '600'}}>
            Select Link for Bloop Focus
          </Text>
          <Text style={{color: '#485164', fontSize: 15, fontWeight: '400'}}>
            U can change it later by pressing edit icon{' '}
          </Text>
          <Edit fill={Colors.Primary1} width="20" height="20" />
        </View>
      ) : null}
      <ScrollView
        style={{
          marginHorizontal: 15,
          height: '68%',
        }}
        contentContainerStyle={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}>
        {socialArray.map(item => {
          if (selected == item) {
            return (
              <View key={item} style={styles.selected}>
                <SocialCard
                  item={item}
                  press={() => {
                    if (focus) {
                      setPayload(socialdoc[item]);
                      setFocus(false);
                      setSelected(item);
                    }
                  }}></SocialCard>
              </View>
            );
          } else {
            return (
              <View
                key={item}
                style={focus ? styles.socialFocus : styles.social}>
                <SocialCard
                  item={item}
                  press={() => {
                    if (focus) {
                      setPayload(socialdoc[item]);
                      setFocus(false);
                      setSelected(item);
                    }
                  }}></SocialCard>
              </View>
            );
          }
        })}
      </ScrollView>
      <AddProfileModal
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
        setSocial={setSocial}
        setSocialVisible={setSocialVisible}
        setSocialSvg={setSocialSvg}></AddProfileModal>
      <SocialModal
        socialVisible={socialVisible}
        setSocialVisible={setSocialVisible}
        social={social}
        socialSvg={socialSvg}></SocialModal>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '93%',
    alignItems: 'center',
  },
  flex2: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '93%',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
  },

  text: {
    color: Colors.Primary1,
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    margin: 20,
  },
  textFocus: {
    color: Colors.Accent1,
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    margin: 20,
  },
  header: {
    backgroundColor: Colors.Primary1,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  social: {
    width: 'auto',
    marginBottom: 30,
    marginHorizontal: 3,
  },
  socialFocus: {
    width: 'auto',
    marginBottom: 30,
    marginHorizontal: 3,
    borderWidth: 2,
    borderColor: Colors.Accent1,
    borderRadius: 20,
    borderStyle: 'dashed',
  },
  selected: {
    width: 'auto',
    marginBottom: 30,
    marginHorizontal: 3,
    borderWidth: 2,
    borderColor: Colors.Accent1,
    borderRadius: 20,
  },
  focus: {
    marginLeft: 20,
  },
});

export default HomeScreen;
