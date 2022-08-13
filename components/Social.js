import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import {Colors} from '../Design/Colors';

import Instagram from '../assets/svgs/instagram';
import Tiktok from '../assets/svgs/tiktok';
import Facebook from '../assets/svgs/facebook';
import Snapchat from '../assets/svgs/snapchat';
import Twitter from '../assets/svgs/twitter';
import Linkedin from '../assets/svgs/linkedin';
import Youtube from '../assets/svgs/youtube';
import Whatsapp from '../assets/svgs/whatsapp';
import Telegram from '../assets/svgs/telegram';
import Viber from '../assets/svgs/viber';
import Skype from '../assets/svgs/skype';
import Messenger from '../assets/svgs/messenger';
import Spotify from '../assets/svgs/spotify';
import Soundcloud from '../assets/svgs/soundcloud';
import Twitch from '../assets/svgs/twitch';
import Tumblr from '../assets/svgs/tumblr';
import Venmo from '../assets/svgs/venmo';
import Cashapp from '../assets/svgs/cashapp';
import Paypal from '../assets/svgs/paypal';
import Dropbox from '../assets/svgs/dropbox';

import Link from '../assets/svgs/link';
import Website from '../assets/svgs/website';

const Social = props => {
  return (
    <View style={[styles.flex, {width: props.style}]}>
      {props.socialArray.map(item => {
        return (
          <TouchableOpacity style={styles.center} key={item}>
            {item == 'Instagram' && <Instagram></Instagram>}
            {item == 'Tiktok' && <Tiktok></Tiktok>}
            {item == 'Facebook' && <Facebook></Facebook>}
            {item == 'Snapchat' && <Snapchat></Snapchat>}
            {item == 'Twitter' && <Twitter></Twitter>}
            {item == 'Linkedin' && <Linkedin></Linkedin>}
            {item == 'Youtube' && <Youtube></Youtube>}
            {item == 'Whatsapp' && <Whatsapp></Whatsapp>}
            {item == 'Telegram' && <Telegram></Telegram>}
            {item == 'Viber' && <Viber></Viber>}
            {item == 'Skype' && <Skype></Skype>}
            {item == 'Messenger' && <Messenger></Messenger>}
            {item == 'Spotify' && <Spotify></Spotify>}
            {item == 'Soundcloud' && <Soundcloud></Soundcloud>}
            {item == 'Twitch' && <Twitch></Twitch>}
            {item == 'Tumblr' && <Tumblr></Tumblr>}
            {item == 'Venmo' && <Venmo></Venmo>}
            {item == 'Cashapp' && <Cashapp></Cashapp>}
            {item == 'Paypal' && <Paypal></Paypal>}
            {item == 'Dropbox' && <Dropbox></Dropbox>}
            {item == 'Link' && <Link></Link>}
            {item == 'Website' && <Website></Website>}
            <Text style={styles.text}>{item}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    margin: 3.5,
  },
  text: {
    marginTop: 1,
    fontFamily: 'Montserrat',
    fontSize: 12,
    color: Colors.Primary1,
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default Social;
