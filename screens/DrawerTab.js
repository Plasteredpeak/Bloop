import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {AuthContext} from '../components/context';
import Auth from '@react-native-firebase/auth';

const DrawerTab = props => {
  const {signOut} = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text
        onPress={() => {
          Auth().signOut();
          signOut();
        }}>
        Drawer Screen
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 40,
    padding: 8,
    alignItems: 'center',
  },
});

export default DrawerTab;
