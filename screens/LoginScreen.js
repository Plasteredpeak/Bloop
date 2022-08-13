import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';

import {Colors} from '../Design/Colors';

import Bloop from '../assets/svgs/bloopGradient.svg';

import InputText from '../components/InputText';

import Auth from '@react-native-firebase/auth';

import {AuthContext} from '../components/context';

const LoginScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signIn} = React.useContext(AuthContext);

  const SignIn = () => {
    if (email.length > 0 && password.length > 0) {
      Auth()
        .signInWithEmailAndPassword(email, password)
        .then(userCredential => {
          // Signed in
          var user = userCredential.user;
          signIn(user.uid);
        })
        .catch(error => {
          var errorCode = error.code;
          var errorMessage = error.message;
          Alert.alert(errorCode, errorMessage);
        });
    } else {
      Alert.alert('Please enter email and password');
    }
  };

  return (
    <View style={styles.container}>

      <View style={styles.logo}>
        <Bloop />
      </View>
      <View style={styles.inner}>
        <Text style={styles.text}>Welcome Back</Text>
        <InputText
          labelValue={email}
          onChangeText={userEmail => setEmail(userEmail)}
          placeholderText={'Email'}
          iconType={'user'}></InputText>
        <InputText
          labelValue={password}
          onChangeText={userPassword => setPassword(userPassword)}
          placeholderText={'Password'}
          iconType={'lock'}
          secureTextEntry={true}></InputText>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => SignIn()}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signUpContainer}>
          <Text style={styles.Stext}>
            Don't have an acount?
            <Text
              style={styles.navButton}
              onPress={() => {
                props.navigation.navigate('SignUpScreen');
              }}>
              {' '}
              Sign Up
            </Text>
          </Text>
        </View>
      </View>
      <Text
        onPress={() => {
          props.navigation.navigate('SplashScreen');
        }}>
        Hello Fuck
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Primary1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '45%',
  },
  inner: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    height: '55%',
    width: '100%',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  text: {
    marginTop: 30,
    marginBottom: 30,
    fontSize: 22,
    color: Colors.Primary1,
  },
  buttonContainer: {
    marginTop: 30,
    flexDirection: 'row',
    margin: 10,
    width: '80%',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: Colors.Accent1,
    padding: 10,
    width: '80%',
    borderRadius: 5,
    height: 50,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontFamily: 'bold',
  },
  signUpContainer: {
    margin: 10,
  },
  Stext: {
    color: '#242A37',
  },
  navButton: {
    color: Colors.Monochrome500,
  },
});

export default LoginScreen;
