import React, {useEffect, useState} from 'react';
import {Button, Text, View, StyleSheet, TextInput} from 'react-native';
import {Colors} from './Design/Colors';
import Bloop from './assets/svgs/Bloop.svg';

const App = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Bloop width={200} height={200}></Bloop>
      </View>
      <Text style={styles.inter}>Hello haris this is a test</Text>
      <Text style={styles.montserrat}>Hello fk moeed</Text>
      <Text style={styles.montserrat}>Hello Ali Hamza</Text>
    </View>
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
