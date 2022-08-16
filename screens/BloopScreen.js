import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';

import {Colors} from '../Design/Colors';

import NFC from '../assets/svgs/NFCicon.svg';

import NfcManager, {NfcTech} from 'react-native-nfc-manager';

import {useIsFocused} from '@react-navigation/native';

NfcManager.start();

const BloopScreen = props => {
  const isFocused = useIsFocused();

  async function readNdef() {
    console.log('reading data');
    try {
      // register for the NFC tag with NDEF in it
      await NfcManager.requestTechnology(NfcTech.Ndef);
      // the resolved tag object will contain `ndefMessage` property
      const tag = await NfcManager.getTag();
      console.log('Tag found', tag);
      Alert.alert('Tag found', tag);
    } catch (ex) {
      console.log('Oops!', ex);
    } finally {
      // stop the nfc scanning
      NfcManager.cancelTechnologyRequest();
    }
  }

  useEffect(() => {
    if (isFocused) {
      NfcManager.start();
      readNdef();
    } else {
      NfcManager.cancelTechnologyRequest();
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <NFC />
      <Text style={styles.text}>
        Put your Bloop card or Bloop tag to the middle back of your phone, and
        hold it there until activated.This should take 5-10 seconds.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          NfcManager.cancelTechnologyRequest();
        }}>
        <Text style={styles.btnText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 40,
    padding: 8,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  button: {
    backgroundColor: '#F0F0F0',
    padding: 12,
    width: '70%',
    borderRadius: 5,
    margin: 20,
  },
  btnText: {
    textAlign: 'center',
    color: '#606C85',
    fontSize: 18,
  },
  text: {
    fontSize: 18,
    color: '#485164',
    textAlign: 'center',
    margin: 20,
  },
});

export default BloopScreen;
