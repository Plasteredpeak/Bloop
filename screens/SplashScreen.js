import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Bloop from '../assets/svgs/Bloop';
import {Colors} from '../Design/Colors';
import {useIsFocused} from '@react-navigation/native';
const SplashScreen = props => {
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      setTimeout(() => {
        props.navigation.navigate('DemoScreen');
      }, 1000);
    }
  });

  return (
    <View style={styles.container}>
      <Bloop></Bloop>
      <Text>Sharing.Effortlessly.</Text>
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
