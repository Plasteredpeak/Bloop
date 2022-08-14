import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import SocialIcon from '../components/SocialIcon';
import {Colors} from '../Design/Colors';

const SocialCard = props => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={{margin: 50}}>
        <SocialIcon item={props.item}></SocialIcon>
      </View>
      <Text style={styles.text}>{props.item}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    width: 110,
    height: 180,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  text: {
    width: 'auto',
    color: Colors.Primary1,
    fontFamily: 'Montserrat',
    alignContent: 'flex-end',
  },
});

export default SocialCard;
