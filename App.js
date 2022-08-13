import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {Button, Text, View, StyleSheet, TextInput} from 'react-native';
import {Colors} from './Design/Colors';

import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = ({route, navigation}) => {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        animationEnabled={true}>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          navigation={navigation}
          route={route}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
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
});

export default App;
