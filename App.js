import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {Button, Text, View, StyleSheet, TextInput} from 'react-native';
import {Colors} from './Design/Colors';

import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = ({route, navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        animationEnabled={true}>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          navigation={navigation}
          route={route}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          navigation={navigation}
          route={route}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 40,
    padding: 8,
  },
  inter: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Inter',
    color: Colors.Accent1,
  },
  montserrat: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Montserrat',
    color: Colors.Secondary1,
  },
});

export default App;
