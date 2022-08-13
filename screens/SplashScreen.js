import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Bloop from '../assets/svgs/Bloop';
import {Colors} from '../Design/Colors';

const SplashScreen = props => {
  return (
    <View style={styles.container}>
      <Bloop></Bloop>
      <Text
        style={styles.text}
        onPress={() => {
          props.navigation.navigate('LoginScreen');
        }}>
        Sharing.Effortlessly.
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Primary1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontFamily: 'Inter',
    color: Colors.Monochrome100,
    marginTop: 40,
  },
});

export default SplashScreen;
