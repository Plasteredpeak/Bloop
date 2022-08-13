import 'react-native-gesture-handler';
import React from 'react';

import {Text} from 'react-native';

import {Colors} from '../Design/Colors';
import Menu from '../assets/svgs/menu.svg';
import Home from '../assets/svgs/HomeIcon.svg';

import HomeScreen from './HomeScreen';
import DrawerTab from './DrawerTab';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'HomeScreen') {
            return focused ? (
              <Home width="25" height="25" fill={Colors.Accent1} />
            ) : (
              <Home width="25" height="25" fill={Colors.Monochrome500} />
            );
          } else if (route.name === 'DrawerTab') {
            return focused ? (
              <Menu width="25" height="25" fill={Colors.Accent1} />
            ) : (
              <Menu width="25" height="25" fill={Colors.Monochrome500} />
            );
          }
          // You can return any component that you like here!
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 50,
        },
      })}>
      <Tab.Screen name="DrawerTab" component={DrawerTab} />
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
    </Tab.Navigator>
  );
};
export default TabStack;
