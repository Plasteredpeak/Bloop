import React from 'react';
import {View} from 'react-native';

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

export default function SocialIcon(props) {
  const item = props.item;
  console.log(item);

  return (
    <View>
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
    </View>
  );
}
