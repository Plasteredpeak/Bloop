import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Colors} from '../Design/Colors';

import User from '../assets/svgs/userIcon.svg';
import Lock from '../assets/svgs/lockIcon.svg';

const InputText = ({labelValue, placeholderText, iconType, ...rest}) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.iconStyle}>
        {iconType === 'user' ? <User /> : <Lock />}
      </View>
      <TextInput
        value={labelValue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor={Colors.Monochrome500}
        {...rest}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 10,
    marginBottom: 10,
    width: '80%',
    height: 60,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
  },
  input: {
    padding: 10,
    flex: 1,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default InputText;
