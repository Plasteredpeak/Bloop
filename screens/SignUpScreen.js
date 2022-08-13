import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';

import {Colors} from '../Design/Colors';

import Bloop from '../assets/svgs/bloopGradient.svg';

import InputText from '../components/InputText';

import Auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import {AuthContext} from '../components/context';

const SignUpScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const {signUp} = React.useContext(AuthContext);

  const SignUp = () => {
    if (email.length > 0 && password.length > 0 && confirmPassword.length > 0) {
      if (password != confirmPassword) {
        Alert.alert('Password does not match');
      } else {
        Auth()
          .createUserWithEmailAndPassword(email, password)
          .then(async userCredential => {
            firestore()
              .collection('users')
              .doc(userCredential.user.uid)
              .set({
                email: email,
                password: password,
                name: '',
                username: '',
                image: '',
                bio: '',
              })
              .then(docRef => {
                console.log('Document Added');
                signUp(userCredential.user);
              })
              .catch(error => {
                console.error('Error adding document: ', error);
              });
          })
          .catch(error => {
            Alert.alert(error.code, error.message);
          });
      }
    } else {
      Alert.alert('Please fill all the fields');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Bloop />
      </View>
      <View style={styles.inner}>
        <Text style={styles.text}>Register</Text>
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
        <InputText
          labelValue={confirmPassword}
          onChangeText={userConfirmPassword =>
            setConfirmPassword(userConfirmPassword)
          }
          placeholderText={'Confirm Password'}
          iconType={'lock'}
          secureTextEntry={true}></InputText>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => SignUp()}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signUpContainer}>
          <Text style={styles.Stext}>
            Already have an acount?
            <Text
              style={styles.navButton}
              onPress={() => {
                props.navigation.navigate('LoginScreen');
              }}>
              {' '}
              Log In
            </Text>
          </Text>
        </View>
      </View>
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
    marginTop: 20,
    marginBottom: 20,
    fontSize: 22,
    color: Colors.Primary1,
  },
  buttonContainer: {
    marginTop: 20,
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

export default SignUpScreen;
