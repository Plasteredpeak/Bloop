import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Modal from 'react-native-modal';
import CrossGrey from '../assets/svgs/cross-grey';
import {Colors} from '../Design/Colors';
import Copy from '../assets/svgs/copy';

export default function SocialModal(props) {
  const [username, setUsername] = useState('');
  const {setSocialVisible, socialVisible, socialSvg, social} = props;
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
}

const styles = StyleSheet.create({
  social: {
    alignItems: 'center',
    backgroundColor: Colors.Monochrome100,
    height: 400,
    borderRadius: 30,
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '93%',
    alignItems: 'center',
  },
  text: {
    color: Colors.Primary1,
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    margin: 20,
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
  input: {
    color: Colors.Primary1,
  },
});