import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Social from '../components/Social';
import Modal from 'react-native-modal';
import Cross from '../assets/svgs/cross';
import {Colors} from '../Design/Colors';

const AppProfileModal = props => {
  const {
    isModalVisible,
    setModalVisible,
    setSocial,
    setSocialVisible,
    setSocialSvg,
  } = props;
  const socialArray = [
    ['Instagram', 'Facebook', 'Tiktok', 'Snapchat'],
    ['Twitter', 'Linkedin', 'Youtube', 'Whatsapp'],
    ['Telegram', 'Viber', 'Skype', 'Messenger'],
    ['Spotify', 'Soundcloud', 'Twitch', 'Tumblr'],
    ['Venmo', 'Cashapp', 'Paypal', 'Dropbox'],
  ];

  const linkArray = [['Link', 'Website']];
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

const styles = StyleSheet.create({
  modal: {
    alignItems: 'center',
    backgroundColor: Colors.Monochrome100,
    height: '90%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  text: {
    color: Colors.Primary1,
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    margin: 20,
  },
});
export default AppProfileModal;
