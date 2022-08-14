import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import {Colors} from '../Design/Colors';

import SocialIcon from '../components/SocialIcon';

const Social = props => {
  return (
    <View style={[styles.flex, {width: props.style}]}>
      {props.socialArray.map(item => {
        return (
          <TouchableOpacity
            style={styles.center}
            key={item}
            onPress={() => {
              props.setSocial(item);
              props.setSocialVisible(true);
              props.setModal(false);
              props.setSocialSvg(() => {
                return <SocialIcon item={item}></SocialIcon>;
              });
            }}>
            <SocialIcon item={item}></SocialIcon>
            <Text style={styles.text}>{item}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    margin: 3.5,
  },
  text: {
    marginTop: 1,
    fontFamily: 'Montserrat',
    fontSize: 12,
    color: Colors.Primary1,
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default Social;
