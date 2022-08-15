import 'react-native-gesture-handler';
import React from 'react';

import {Text} from 'react-native';

import {Colors} from '../Design/Colors';
import Menu from '../assets/svgs/menu.svg';
import Home from '../assets/svgs/HomeIcon.svg';
import Icon from '../assets/svgs/lockIcon.svg';
import Activate from '../assets/svgs/activate.svg';
import Contact from '../assets/svgs/contacts.svg';

import HomeScreen from './HomeScreen';
import BloopScreen from './BloopScreen';
import ContactScreen from './ContactScreen';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({route, navigation}) => ({
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'HomeScreen') {
            return focused ? (
              <Home width="25" height="25" fill={Colors.Accent1} />
            ) : (
              <Home width="25" height="25" fill={Colors.Monochrome500} />
            );
          } else if (route.name === 'Screen') {
            return focused ? (
              <Menu width="25" height="25" fill={Colors.Monochrome500} />
            ) : (
              <Menu width="25" height="25" fill={Colors.Monochrome500} />
            );
          } else if (route.name === 'BloopScreen') {
            return focused ? (
              <Activate width="25" height="25" fill={Colors.Accent1} />
            ) : (
              <Activate width="25" height="25" fill={Colors.Monochrome500} />
            );
          } else if (route.name === 'ContactScreen') {
            return focused ? (
              <Contact width="25" height="25" fill={Colors.Accent1} />
            ) : (
              <Contact width="25" height="25" fill={Colors.Monochrome500} />
            );
          }
          // You can return any component that you like here!
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 50,
        },
      })}>
      <Tab.Screen
        name="Screen"
        component={HomeScreen}
        listeners={({navigation}) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.openDrawer();
          },
        })}
      />
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="BloopScreen" component={BloopScreen} />
      <Tab.Screen name="ContactScreen" component={ContactScreen} />
    </Tab.Navigator>
  );
};
export default TabStack;
