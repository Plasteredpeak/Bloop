import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  ScrollView,
} from 'react-native';

import {Colors} from '../Design/Colors';
import UserInfo from '../Components/UserInfo';

const ProfileScreen = () => {
  <View style={styles.container}>
    <View style={styles.back}>
      <Icon
        name="arrow-back"
        size={30}
        color={Colors.MonochromeBlue900}
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
              source={require('../assets/Icons/defaultuser.png')}
            />
          ) : image == '' ? (
            <Image style={styles.logo} source={{uri: url}} />
          ) : (
            <Image style={styles.logo} source={{uri: image}} />
          )}
        </TouchableOpacity>
        <Text style={[typo.Header_20pt, styles.headtext]}>{name}</Text>

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
            name={'Phone:'}
            labelValue={phone}
            onChangeText={text => setPhone(text)}
          />

          <UserInfo
            name={'PmcID:'}
            labelValue={pmcID}
            onChangeText={text => setPmcID(text)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              update();
            }}>
            <Text style={[typo.Text_16pt, styles.buttonText]}>
              Save Changes
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  </View>;
};
