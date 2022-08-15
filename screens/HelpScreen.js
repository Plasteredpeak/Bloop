import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {Colors} from '../Design/Colors';

import Help from '../assets/svgs/HelpVector';

const HelpScreen = props => {
  return (
    <View style={styles.container}>
      <View style={[styles.flex]}>
        <View style={styles.back}>
          <Icon
            name="arrow-back"
            size={30}
            color={Colors.Primary1}
            onPress={() => {
              props.navigation.goBack();
            }}
          />
        </View>
        <Text style={[styles.text]}>Help Screen</Text>
      </View>

      <Help width="350" height="350" style={{marginTop: 80}}></Help>

      <TouchableOpacity onPress={() => {}} style={styles.flex}>
        <Text style={[styles.textSml, {width: 300}]}>
          If you need further Help, Please Contact US on{' '}
          <Text style={{fontWeight: 'bold', color: Colors.Primary1}}>Link</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    padding: 8,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  back: {
    margin: 10,
  },
  help: {
    width: 100,
  },
  text: {
    color: Colors.Primary1,
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    margin: 20,
  },
  textSml: {
    color: Colors.Primary1,
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    margin: 20,
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '93%',
    alignItems: 'center',
  },
});

export default HelpScreen;
