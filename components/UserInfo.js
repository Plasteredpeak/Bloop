import React, {useRef} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../Design/Colors';

let Name;
const UserInfo = ({bool = true, name, labelValue, ...rest}) => {
  const [clicked, setClicked] = React.useState(false);
  const ref = useRef(null);
  Name = name;
  console.log(Name);
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{name}</Text>
      </View>
      <View
        style={[
          clicked ? {borderWidth: 1} : null,
          name == 'Bio:' ? styles.inputContainer2 : styles.inputContainer,
        ]}>
        <TextInput
          value={labelValue}
          style={styles.input}
          numberOfLines={1}
          onBlur={() => setClicked(false)}
          onFocus={() => setClicked(true)}
          ref={ref}
          editable={bool}
          {...rest}
        />
        {bool ? (
          <View
            style={[
              clicked ? styles.clicked : styles.unclicked,
              styles.iconStyle,
            ]}>
            <TouchableOpacity
              onPress={() => {
                setClicked(true);
                ref.current.focus();
              }}>
              <Icon
                name="edit"
                size={27}
                color={clicked ? Colors.Accent1 : Colors.Primary1}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={[styles.unclicked, styles.iconStyle]}>
            <TouchableOpacity onPress={() => {}} disabled={bool}>
              <Icon name="lock" size={27} color={Colors.Monochrome500} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 10,
    width: '100%',
    backgroundColor: '#F2F3F4',
  },
  inputContainer: {
    marginLeft: 10,
    width: '80%',
    height: 60,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.Accent1,
  },
  inputContainer2: {
    marginLeft: 10,
    width: '80%',
    height: 100,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.Accent1,
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    borderWidth: 0,
  },
  input: {
    paddingLeft: 20,
    flex: 1,
    color: Colors.Monochrome500,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    //borderWidth:1
  },
  textContainer: {
    margin: 1,
  },
  text: {
    color: Colors.Primary1,
    fontSize: 16,
    fontFamily: 'Montserrat',
    fontWeight: '700',
  },
});
export default UserInfo;
