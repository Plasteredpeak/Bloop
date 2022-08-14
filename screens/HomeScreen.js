import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import Copy from '../assets/svgs/copy';
import {Colors} from '../Design/Colors';

import Modal from 'react-native-modal';

import Cross from '../assets/svgs/cross';
import CrossGrey from '../assets/svgs/cross-grey';
import Add from '../assets/svgs/Add';
import Focus from '../assets/svgs/Focus';

import SocialCard from '../components/SocialCard';

import Social from '../components/Social';

const HomeScreen = props => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [social, setSocial] = useState('');
  const [socialVisible, setSocialVisible] = useState(false);
  const [socialSvg, setSocialSvg] = useState();

  const socialArray = [
    ['Instagram', 'Facebook', 'Tiktok', 'Snapchat'],
    ['Twitter', 'Linkedin', 'Youtube', 'Whatsapp'],
    ['Telegram', 'Viber', 'Skype', 'Messenger'],
    ['Spotify', 'Soundcloud', 'Twitch', 'Tumblr'],
    ['Venmo', 'Cashapp', 'Paypal', 'Dropbox'],
  ];

  const linkArray = [['Link', 'Website']];

  const testArray = [
    'Instagram',
    'Facebook',
    'Tiktok',
    'Snapchat',
    'Instagram',
    'Facebook',
    'Tiktok',
    'Snapchat',
  ];

  const SocialOverlay = () => {
    const [username, setUsername] = useState('');
    return (
      <Modal
        backdropColor="black"
        backdropOpacity={0.9}
        animationIn="slideInUp"
        animationInTiming={400}
        isVisible={socialVisible}
        onBackdropPress={() => {
          setSocialVisible(false);
        }}>
        <View style={[styles.social]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: '90%',
            }}>
            <View
              style={[
                styles.flex,
                {
                  justifyContent: 'center',
                  margin: 20,
                  marginLeft: 75,
                  width: 'auto',
                },
              ]}>
              <Text style={[styles.text, {margin: 0}]}>Adding </Text>
              <Text style={[styles.text, {fontWeight: 'bold', margin: 0}]}>
                {social}
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => {
                setSocialVisible(false);
              }}>
              <CrossGrey
                style={{marginLeft: 30, width: 50, height: 50}}></CrossGrey>
            </TouchableOpacity>
          </View>
          {socialSvg}
          <View style={[styles.inputContainer]}>
            <TextInput
              placeholder="Add your Username"
              value={username}
              onChangeText={setUsername}
              placeholderTextColor={Colors.Primary1}
              style={styles.input}
            />
            <Copy></Copy>
          </View>

          <TouchableOpacity
            style={[
              styles.flex,
              {
                width: '80%',
                paddingHorizontal: 15,
                borderRadius: 10,
                marginBottom: 20,
                backgroundColor: '#dee2e6',
              },
            ]}>
            {socialSvg}
            <Text style={[styles.text, {fontSize: 14, width: 180}]}>
              Tap to Open {social} App and Copy the username
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '80%',
              height: '16%',
              backgroundColor: Colors.Primary1,
              borderRadius: 10,
            }}
            onPress={() => {
              setSocialVisible(false);
            }}>
            <Text
              style={[
                styles.text,
                {
                  fontWeight: 'bold',
                  color: Colors.Monochrome100,
                },
              ]}>
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  };

  const ModalOverlay = () => {
    return (
      <Modal
        backdropColor="black"
        backdropOpacity={0.9}
        animationIn="slideInUp"
        animationInTiming={400}
        isVisible={isModalVisible}
        style={{justifyContent: 'flex-end', margin: 0}}
        onBackdropPress={() => {
          setModalVisible(false);
        }}>
        <View style={[styles.modal]}>
          <Text style={styles.text}>Add A Profile From</Text>

          {socialArray.map(item => {
            return (
              <Social
                socialArray={item}
                key={item}
                style={'90%'}
                setModal={setModalVisible}
                setSocial={setSocial}
                setSocialVisible={setSocialVisible}
                setSocialSvg={setSocialSvg}></Social>
            );
          })}

          <View
            style={{
              borderWidth: 1,
              borderColor: Colors.Primary1,
              width: '90%',
              marginBottom: 10,
            }}></View>

          <View style={{alignSelf: 'flex-start', marginLeft: 20}}>
            {linkArray.map(item => {
              return (
                <Social
                  socialArray={item}
                  key={item}
                  style={'40%'}
                  setModal={setModalVisible}
                  setSocial={setSocial}
                  setSocialVisible={setSocialVisible}
                  setSocialSvg={setSocialSvg}></Social>
              );
            })}
          </View>

          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'center'}}
            onPress={() => {
              setModalVisible(false);
            }}>
            <Cross></Cross>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  };

  return (
    <View style={styles.container}>
      <View style={[styles.header, styles.flex, {width: '100%'}]}>
        <Image
          style={{width: 80, height: 80, borderRadius: 50}}
          source={{
            uri: 'https://dwpdigital.blog.gov.uk/wp-content/uploads/sites/197/2018/02/Pippa-3.jpg',
          }}
        />

        <View
          style={{
            width: '70%',
            height: 105,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontFamily: 'Montserrat',
              fontWeight: 'bold',
              fontSize: 24,
            }}>
            Jennifer Attley
          </Text>
          <Text
            style={{
              fontFamily: 'Montserrat',
              fontWeight: 'bold',
              fontSize: 15,
              color: Colors.Secondary1,
            }}>
            @jenny.attley21
          </Text>
          <Text
            style={{
              fontFamily: 'Montserrat',
              fontSize: 12,
            }}>
            This is a multiline bio about yourself. It should be limited to
            three lines of words which is about 110 chars.
          </Text>
        </View>
      </View>

      <View style={styles.flex}>
        <Text style={styles.text}>My Profile</Text>
        <View style={[styles.flex, {width: '20%'}]}>
          <Focus></Focus>
          <Add></Add>
        </View>
      </View>

      <ScrollView
        style={{
          borderWidth: 1,
          marginHorizontal: 15,
          height: '65%',
        }}
        contentContainerStyle={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
        }}>
        {testArray.map(item => {
          return (
            <View style={{width: 'auto', marginBottom: 30}}>
              <SocialCard item={item}></SocialCard>
            </View>
          );
        })}
      </ScrollView>

      <Button
        title="Open Modal"
        onPress={() => {
          setSocial('');
          setSocialVisible(false);
          setModalVisible(true);
        }}></Button>
      <ModalOverlay></ModalOverlay>
      <SocialOverlay></SocialOverlay>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    alignItems: 'center',
    backgroundColor: Colors.Monochrome100,
    height: '90%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  social: {
    alignItems: 'center',
    backgroundColor: Colors.Monochrome100,
    height: 400,
    borderRadius: 30,
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
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
  input: {
    color: Colors.Primary1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginVertical: 30,
    borderRadius: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: Colors.Primary1,
  },
  header: {
    backgroundColor: Colors.Primary1,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
});

export default HomeScreen;
