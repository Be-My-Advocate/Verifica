import React from 'react'
import { createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import PatientScreen from './patient/PatientScreen'
import DirectoryScreen from './patient/DirectoryScreen'
import RecordsScreen from './patient/RecordsScreen'
import ConnectScreen from './patient/ConnectScreen'
import LearnScreen from './patient/LearnScreen'

const PatientNavBar = createBottomTabNavigator(
  {
    Patient: {
      screen: PatientScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <FontAwesomeIcon icon="home" color={tintColor}/>
        )
      },
    },
    Directory: {
      screen: DirectoryScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <FontAwesomeIcon icon="address-book" color={tintColor}/>
        )
      }
    },
    Records: {
      screen: RecordsScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <FontAwesomeIcon icon="notes-medical" color={tintColor}/>
        )
      }
    },
    Connect: {
      screen: ConnectScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <FontAwesomeIcon icon="comment-alt" color={tintColor}/>
        )
      }
    },
    Learn: {
      screen: LearnScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <FontAwesomeIcon icon="list-alt" color={tintColor}/>
        )
      }
    },
  },
  {

    initialRouteName: 'Patient',
    navigationOptions:  {
      title: 'Patient',
      headerLeft: null,
      gesturesEnabled: false,
    },
    tabBarOptions: {
      inactiveBackgroundColor: '#4B0082',
      inactiveTintColor: 'white',
      headerTintColor: '#4B0082',
      activeBackgroundColor: 'white',
      activeTintColor: '#4B0082',
      style: {
        backgroundColor: '#4B0082',
      },
    }
  }
);

export default createAppContainer(PatientNavBar)