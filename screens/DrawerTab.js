import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import {AuthContext} from '../components/context';
import Auth from '@react-native-firebase/auth';

import {Colors} from '../Design/Colors';

import Bloop from '../assets/svgs/bloopGradient.svg';
import Home from '../assets/svgs/HomeIcon.svg';
import Logout from '../assets/svgs/logout.svg';
import Edit from '../assets/svgs/edit.svg';

export const DrawerTab = props => {
  const {signOut} = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Bloop width="140" height="140" />
      </View>
      <View style={styles.line} />
      <View style={styles.content}>
        <DrawerItem
          icon={() => (
            <Home width="24" height="24" fill={Colors.Monochrome500} />
          )}
          style={styles.item}
          labelStyle={styles.label}
          label="Home"
          onPress={() => {
            props.navigation.navigate('HomeScreen');
          }}
        />
        <DrawerItem
          icon={() => (
            <Edit width="24" height="24" fill={Colors.Monochrome500} />
          )}
          style={styles.item}
          labelStyle={styles.label}
          label="Edit Profile"
          onPress={() => {
            props.navigation.navigate('ProfileScreen');
          }}
        />
        <DrawerItem
          icon={() => (
            <Logout width="24" height="24" fill={Colors.Monochrome500} />
          )}
          style={styles.item}
          labelStyle={styles.label}
          label="Log Out"
          onPress={() => {
            Auth().signOut();
            signOut();
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    marginTop: 30,
    marginHorizontal: 20,
    marginBottom: -20,
  },
  line: {
    borderBottomColor: '#E9E9E9',
    borderBottomWidth: 1,
    marginHorizontal: 20,
  },
  label: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 22,
    fontWeight: '600',
    color: Colors.Monochrome500,
    marginLeft: -20,
  },
  item: {
    marginLeft: 20,
    marginBottom: -5,
    marginTop: 5,
  },
});
