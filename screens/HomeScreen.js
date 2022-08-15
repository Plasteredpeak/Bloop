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
import SocialCard from '../components/SocialCard';
import AddProfileModal from '../components/AddProfileModal';
import SocialModal from '../components/SocialModal';

const HomeScreen = props => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [social, setSocial] = useState('');
  const [socialVisible, setSocialVisible] = useState(false);
  const [socialSvg, setSocialSvg] = useState();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [user, setUser] = useState('');
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();

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
          setEmail(doc.email);
          setUser(doc.username);
          setBio(doc.bio);
          setUrl(doc.image);
          console.log('User data: ', documentSnapshot.data());
        }
      })
      .finally(() => setLoading(false));
    //console.log(userDocument);
  };

  useEffect(() => {
    if (isFocused) {
      console.log('called');
      getData();
    }
  }, [isFocused]);

  const testArray = [
    'Instagram',
    'Facebook',
    'Tiktok',
    'Snapchat',
    'Whatsapp',
    'Twitter',
    'Cashapp',
    'Paypal',
  ];

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
        <Text style={[styles.text, {fontWeight: 'bold'}]}>My Profile</Text>
        <View style={[styles.flex, {width: '20%'}]}>
          <TouchableOpacity>
            <Focus></Focus>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSocial('');
              setSocialVisible(false);
              setModalVisible(true);
            }}>
            <Add></Add>
          </TouchableOpacity>
        </View>
      </View>
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
        {testArray.map(item => {
          return (
            <View
              key={item}
              style={{width: 'auto', marginBottom: 30, marginHorizontal: 5}}>
              <SocialCard item={item}></SocialCard>
            </View>
          );
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
  column: {
    flexDirection: 'column',
  },

  text: {
    color: Colors.Primary1,
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    margin: 20,
  },
  header: {
    backgroundColor: Colors.Primary1,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
});

export default HomeScreen;
