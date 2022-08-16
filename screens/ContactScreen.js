import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import InputText from '../components/InputText';

import {Colors} from '../Design/Colors';

import AddContactOverlay from '../components/AddContactOverlay';

import Auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const ContactScreen = props => {
  const [search, setSearch] = useState('');
  const [contactVisible, setContactVisible] = useState(false);
  const [contact, setContact] = useState();
  const [names, setNames] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const getContact = async () => {
    await firestore()
      .collection('contacts')
      .doc(Auth().currentUser.uid)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          setContact(documentSnapshot.data());
          let arr = Object.keys(documentSnapshot.data());
          setNames(arr);
          //console.log('Socials: ', socialdoc);
        }
      });
    //console.log(userDocument);
  };

  useEffect(() => {
    getContact();
    setRefresh(false);
  }, [refresh]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => {
            setContactVisible(true);
          }}>
          <Icon name="person-add" size={30} color={Colors.Monochrome100} />
        </TouchableOpacity>

        <View style={styles.title}>
          <Text style={styles.text}>Contacts</Text>
          <InputText
            labelValue={search}
            onChangeText={search => setSearch(search)}
            placeholderText={'Name or Username'}
            iconType={'search'}></InputText>
        </View>
      </View>
      <View style={styles.body}>
        <FlatList
          data={names}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <View style={styles.item}>
              <View style={styles.img}>
                <Image
                  source={require('../assets/svgs/defaultuser.png')}
                  style={styles.img}
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.textname}>{item}</Text>
                {<Text style={styles.textuser}>@{contact[item]}</Text>}
              </View>
            </View>
          )}
        />
      </View>
      <AddContactOverlay
        contactVisible={contactVisible}
        setContactVisible={setContactVisible}
        Refresh={setRefresh}></AddContactOverlay>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  back: {
    alignSelf: 'flex-end',
    marginTop: 15,
    marginRight: 15,
  },
  title: {
    alignItems: 'center',
    paddingBottom: 10,
  },
  header: {
    backgroundColor: Colors.Primary1,
  },
  text: {
    color: Colors.Monochrome100,
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  img: {
    width: 75,
    height: 75,
    borderRadius: 50,
    marginHorizontal: 10,
  },
  textContainer: {
    marginHorizontal: 10,
  },
  textname: {
    fontSize: 20,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    color: '#242A37',
  },
  textuser: {
    fontSize: 15,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    color: Colors.Accent1,
  },
});

export default ContactScreen;
