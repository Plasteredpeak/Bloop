import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Bloop from '../assets/svgs/Bloop';

const LoginScreen = props => {
  return (
    <View style={styles.container}>
      <Text
        onPress={() => {
          props.navigation.navigate('SplashScreen');
        }}>
        Hello Fuck{' '}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default LoginScreen;
