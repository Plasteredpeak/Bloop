import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {Colors} from '../Design/Colors';

const HelpScreen = props => {
  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <Icon
          name="arrow-back"
          size={30}
          color={Colors.Primary1}
          onPress={() => {
            props.navigation.goBack();
          }}
        />
      </View>
      <Text style={styles.text}>Help Screen</Text>
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
    backgroundColor: '#FFFFFF',
  },
  back: {
    margin: 10,
  },
});

export default HelpScreen;
