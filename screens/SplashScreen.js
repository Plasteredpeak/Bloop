import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Bloop from '../assets/svgs/Bloop';

const SplashScreen = props => {
  return (
    <View style={styles.container}>
      <Bloop width={300} height={300}></Bloop>
      <Text
        onPress={() => {
          props.navigation.navigate('LoginScreen');
        }}>
        Hello
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

export default SplashScreen;
