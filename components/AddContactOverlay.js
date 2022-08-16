import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import Modal from 'react-native-modal';
import CrossGrey from '../assets/svgs/cross-grey';
import {Colors} from '../Design/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

import Auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export default function AppContactOverlay(props) {
  const {setContactVisible, contactVisible, Refresh} = props;
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  //const {image, setImage} = useState('');

  const addContact = () => {
    firestore()
      .collection('contacts')
      .doc(Auth().currentUser.uid)
      .set(
        {
          [name]: username,
        },
        {merge: true},
      )
      .then(docRef => {
        console.log('Document Added');
        setUsername('');
        setName('');
        setContactVisible(false);
        Refresh(true);
      })
      .catch(error => {
        console.error('Error adding document: ', error);
      });
  };

  return (
    <Modal
      backdropColor="black"
      backdropOpacity={0.9}
      animationIn="slideInUp"
      animationInTiming={400}
      isVisible={contactVisible}
      onBackdropPress={() => {
        setContactVisible(false);
      }}>
      <View style={[styles.social]}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '90%',
          }}>
          <View
            style={[
              styles.flex,
              {
                justifyContent: 'center',
                margin: 20,
                marginLeft: 75,
                width: 'auto',
              },
            ]}>
            <Text style={[styles.text, {margin: 0, fontWeight: 'bold'}]}>
              Add Contacts
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              setContactVisible(false);
            }}>
            <CrossGrey
              style={{marginLeft: 30, width: 50, height: 50}}></CrossGrey>
          </TouchableOpacity>
        </View>

        <View style={[styles.inputContainer]}>
          <TextInput
            placeholder="Add Name"
            value={name}
            onChangeText={name => setName(name)}
            placeholderTextColor={Colors.Primary1}
            style={styles.input}
          />
          <Icon name="person" size={25} color={Colors.Primary1} />
        </View>

        <View style={[styles.inputContainer]}>
          <TextInput
            placeholder="Add Username"
            value={username}
            onChangeText={username => setUsername(username)}
            placeholderTextColor={Colors.Primary1}
            style={styles.input}
          />
          <Icon name="person-circle" size={25} color={Colors.Primary1} />
        </View>

        {/* <TouchableOpacity style={[styles.inputContainer, {padding: 15}]}>
          <Text style={{color: Colors.Primary1}}> Add Image</Text>
          <Icon name="image-outline" size={25} color={Colors.Primary1} />
        </TouchableOpacity> */}

        <TouchableOpacity
          style={[styles.btn]}
          onPress={() => {
            addContact();
          }}
          disabled={name == '' && username == ''}>
          <Text
            style={[
              {
                fontWeight: 'bold',
                fontSize: 18,
                color: Colors.Monochrome100,
                textAlign: 'center',
              },
            ]}>
            Add Contact
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  social: {
    alignItems: 'center',
    backgroundColor: Colors.Monochrome100,
    height: 350,
    borderRadius: 30,
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '93%',
    alignItems: 'center',
  },
  text: {
    color: Colors.Primary1,
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    margin: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginVertical: 20,
    borderRadius: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: Colors.Primary1,
  },
  input: {
    color: Colors.Primary1,
    width: 230,
  },
  btn: {
    backgroundColor: Colors.Primary1,
    color: Colors.Monochrome100,
    width: '78%',
    height: 50,
    padding: 10,
    marginVertical: 20,
    borderRadius: 20,
  },
});
