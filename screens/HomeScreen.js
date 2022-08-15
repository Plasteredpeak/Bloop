import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {Colors} from '../Design/Colors';

import Add from '../assets/svgs/Add';
import Focus from '../assets/svgs/Focus';
import SocialCard from '../components/SocialCard';
import AddProfileModal from '../components/AddProfileModal';
import SocialModal from '../components/SocialModal';

const HomeScreen = props => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [social, setSocial] = useState('');
  const [socialVisible, setSocialVisible] = useState(false);
  const [socialSvg, setSocialSvg] = useState();

  const testArray = [
    'Instagram',
    'Facebook',
    'Tiktok',
    'Snapchat',
    'Whatsapp',
    'Twitter',
    'Cashapp',
    'Paypal',
  ];

  return (
    <View style={styles.container}>
      <View style={[styles.header, styles.flex, {width: '100%'}]}>
        <Image
          style={{width: 80, height: 80, borderRadius: 50}}
          source={{
            uri: 'https://dwpdigital.blog.gov.uk/wp-content/uploads/sites/197/2018/02/Pippa-3.jpg',
          }}
        />

        <View
          style={{
            width: '70%',
            height: 105,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontFamily: 'Montserrat',
              fontWeight: 'bold',
              fontSize: 24,
              color: Colors.Monochrome100,
            }}>
            Jennifer Attley
          </Text>
          <Text
            style={{
              fontFamily: 'Montserrat',
              fontWeight: 'bold',
              fontSize: 15,
              color: Colors.Secondary1,
            }}>
            @jenny.attley21
          </Text>
          <Text
            style={{
              fontFamily: 'Montserrat',
              fontSize: 12,
              color: Colors.Monochrome100,
            }}>
            This is a multiline bio about yourself. It should be limited to
            three lines of words which is about 110 chars.
          </Text>
        </View>
      </View>
      <View style={styles.flex}>
        <Text style={[styles.text, {fontWeight: 'bold'}]}>My Profile</Text>
        <View style={[styles.flex, {width: '20%'}]}>
          <TouchableOpacity>
            <Focus></Focus>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSocial('');
              setSocialVisible(false);
              setModalVisible(true);
            }}>
            <Add></Add>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        style={{
          marginHorizontal: 15,
          height: '68%',
        }}
        contentContainerStyle={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}>
        {testArray.map(item => {
          return (
            <View
              key={item}
              style={{width: 'auto', marginBottom: 30, marginHorizontal: 5}}>
              <SocialCard item={item}></SocialCard>
            </View>
          );
        })}
      </ScrollView>
      <AddProfileModal
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
        setSocial={setSocial}
        setSocialVisible={setSocialVisible}
        setSocialSvg={setSocialSvg}></AddProfileModal>
      <SocialModal
        socialVisible={socialVisible}
        setSocialVisible={setSocialVisible}
        social={social}
        socialSvg={socialSvg}></SocialModal>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '93%',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
  },

  text: {
    color: Colors.Primary1,
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    margin: 20,
  },
  header: {
    backgroundColor: Colors.Primary1,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
});

export default HomeScreen;
