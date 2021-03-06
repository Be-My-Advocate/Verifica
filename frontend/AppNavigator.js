import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {StyleSheet, Text, Image, View} from 'react-native'

import HomeScreen from './HomeScreen'
import PatientNavBar from './PatientNavBar'
import MessageNavBar from './MessageNavBar'
import RegisterScreen from './login/RegisterScreen'
import PatientRegisterScreen from './login/PatientRegisterScreen'
import LoginScreen from './login/LoginScreen'

const styles = StyleSheet.create({
  image: {width: 20, height: 20, borderColor: 'pink', borderWidth: 1, borderRadius: 12},
  textStyle: {color: 'white', marginLeft: 10, fontSize: 20, fontWeight: '600'},
  headerStyle: {flex: 1, flexDirection: 'row', justifyContent: 'flex-start', padding: 10, alignItems: 'center'}
})


const AppNavigator = createStackNavigator(
  {
    screen: HomeScreen,
    patient: PatientNavBar,
    message: MessageNavBar,
    login: LoginScreen,
    patientRegister: PatientRegisterScreen,
    register: RegisterScreen
    // advocate: AdvocateNavBar,
  },
  {
    initialRouteName: 'screen',
    defaultNavigationOptions: {
      headerTitle: () => <View style={styles.headerStyle}>
        <Text style={styles.textStyle}>
               Verifica
        </Text>
      </View>,
      headerStyle: {
        backgroundColor: '#333',
        fontcolor: 'white'
      },
    },
    navigationOptions:  {
      title: 'screen',
      headerBackTitle: null,
      headerLeft:null,
      gesturesEnabled: false,
    }
  }
);


export default createAppContainer(AppNavigator)
