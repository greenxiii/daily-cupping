import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation'
import firebase from 'react-native-firebase';

import Loading from './components/Loading'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Main from './components/Main'

const RootStack = createSwitchNavigator(
  {
    Loading: Loading,
    SignUp: SignUp,
    Login: Login,
    Main: Main
  },
  {
    initialRouteName: 'Loading'
  }
)

const App = createAppContainer(RootStack);
export default App;