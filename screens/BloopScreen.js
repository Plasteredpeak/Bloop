import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {Colors} from '../Design/Colors';

import NFC from '../assets/svgs/NFCicon.svg';

const BloopScreen = props => {
  return (
    <View style={styles.container}>
      <NFC />
      <Text style={styles.text}>
        Put your Bloop card or Bloop tag to the middle back of your phone, and
        hold it there until activated.This should take 5-10 seconds.
      </Text>
      <TouchableOpacity style={styles.button}>
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
