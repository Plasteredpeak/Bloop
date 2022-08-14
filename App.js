import 'react-native-gesture-handler';

import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Bloop from './assets/svgs/Bloop';
import {Colors} from './Design/Colors';

//import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import TabStack from './screens/TabStack';
import {DrawerTab} from './screens/DrawerTab';
import ProfileScreen from './screens/ProfileScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {AuthContext} from './components/context';

import Auth from '@react-native-firebase/auth';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App = ({route, navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const authContext = React.useMemo(
    () => ({
      signIn: foundUser => {
        setUserToken(foundUser);
        //setIsLoading(false);
        console.log('user token: ', userToken);
      },
      signOut: () => {
        setUserToken(null);
        //setIsLoading(false);
        console.log('User SignedOut');
      },
      signUp: CreatedUser => {
        setUserToken(CreatedUser);
        //setIsLoading(false);
        //console.log('user token: ', userToken.uid);
      },
    }),
    [],
  );

  useEffect(() => {
    setTimeout(() => {
      Auth().onAuthStateChanged(user => {
        if (user) {
          setUserToken(user.uid);
          console.log('Logged In User:', user.email);
        }
      });
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Bloop></Bloop>
        <Text style={styles.text}>Sharing.Effortlessly.</Text>
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken !== null ? (
          <Drawer.Navigator
            drawerBackgroundColor="transparent"
            screenOptions={{
              drawerStyle: {
                borderTopRightRadius: 30,
                borderBottomRightRadius: 30,
                width: '60%',
              },
              headerShown: false,
            }}
            drawerContent={props => <DrawerTab {...props} />}>
            <Drawer.Screen name="TabStack" component={TabStack} />
            {/* <Drawer.Screen name="ProfileScreen" component={ProfileScreen} /> */}
          </Drawer.Navigator>
        ) : (
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              navigation={navigation}
              route={route}
            />
            <Stack.Screen
              name="SignUpScreen"
              component={SignUpScreen}
              navigation={navigation}
              route={route}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Primary1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontFamily: 'Inter',
    color: Colors.Monochrome100,
    marginTop: 40,
  },
});

export default App;
