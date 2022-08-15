import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import Auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

import ImagePicker from 'react-native-image-crop-picker';

import {TouchableOpacity} from 'react-native-gesture-handler';

import {Colors} from '../Design/Colors';
import UserInfo from '../components/UserInfo';

const ProfileScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');
  const [bio, setBio] = useState('');
  const [user, setUser] = useState('');
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(true);

  const google = Auth().currentUser.providerData[0].providerId;
  console.log(google);

  const update = () => {
    if (image != '') {
      console.log('update with image');
      uploadImageToStorage();
    } else {
      console.log(url, 'running update without image');
      UpdateInfo(url);
    }
  };

  const UpdateInfo = URL => {
    firestore()
      .collection('users')
      .doc(Auth().currentUser.uid)
      .update({
        name: name,
        email: email,
        username: user,
        bio: bio,
        image: URL,
      })
      .then(() => {
        console.log('Doc updated');
        if (google != 'google.com') {
          Auth()
            .currentUser.updateEmail(email)
            .then(() => {
              console.log('auth email updated');
            })
            .catch(error => {
              console.log(error);
            });
        }
        navigation.goBack();
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getData = async () => {
    await firestore()
      .collection('users')
      .doc(Auth().currentUser.uid)
      .get()
      .then(documentSnapshot => {
        console.log('User exists: ', documentSnapshot.exists);

        if (documentSnapshot.exists) {
          const doc = documentSnapshot.data();
          setName(doc.name);
          setEmail(doc.email);
          setUser(doc.username);
          setBio(doc.bio);
          setUrl(doc.image);
          console.log('User data: ', documentSnapshot.data());
        }
      })
      .finally(() => setLoading(false));
    //console.log(userDocument);
  };
  React.useEffect(() => {
    getData();
  }, []);

  const pickImage = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
      cropperCircleOverlay: true,
    })
      .then(Image => {
        setImage(Image.path);
        //uploadImageToStorage()
      })
      .catch(err => {
        console.log(err);
      });
  };

  const uploadImageToStorage = () => {
    let reference = storage().ref(Auth().currentUser.uid);
    let task = reference.putFile(image);

    task.on('state_changed', taskSnapshot => {
      console.log(
        `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
      );
    }); // 3

    task
      .then(() => {
        // 4
        console.log('Image uploaded to the bucket!');
        storage()
          .ref(Auth().currentUser.uid)
          .getDownloadURL()
          .then(URL => {
            UpdateInfo(URL);
            console.log('image updated');
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(e => console.log('uploading image error => ', e));
  };

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <Icon
          name="arrow-back"
          size={30}
          color={Colors.Primary1}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <ScrollView>
        <View style={styles.profile}>
          <TouchableOpacity
            onPress={() => {
              pickImage();
            }}>
            {url == '' ? (
              <Image
                style={styles.logo}
                source={require('../assets/svgs/defaultuser.png')}
              />
            ) : image == '' ? (
              <Image style={styles.logo} source={{uri: url}} />
            ) : (
              <Image style={styles.logo} source={{uri: image}} />
            )}
          </TouchableOpacity>
          <Text style={styles.headtext}>{name}</Text>

          <View>
            <UserInfo
              name={'Name:'}
              labelValue={name}
              onChangeText={text => setName(text)}
            />

            <UserInfo
              name={'Email:'}
              labelValue={email}
              onChangeText={text => setEmail(text)}
              bool={google == 'google.com' ? false : true}
            />

            <UserInfo
              name={'UserName:'}
              labelValue={user}
              onChangeText={text => setUser(text)}
            />

            <UserInfo
              name={'Bio:'}
              labelValue={bio}
              onChangeText={text => setBio(text)}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                update();
              }}>
              <Text style={styles.buttonText}>Save Changes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    zIndex: -10,
    height: '93%',
    backgroundColor: '#F2F3F4',
  },
  back: {
    margin: 10,
  },
  profile: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  headtext: {
    fontSize: 20,
    margin: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flex: 1,
    margin: 20,
    width: '80%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: Colors.Secondary1,
    padding: 12,
    width: '60%',
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
});
export default ProfileScreen;
