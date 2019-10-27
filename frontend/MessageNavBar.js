import React from 'react'
import { createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import MessageScreen from './patient/connect/MessageScreen'
import VideoScreen from './patient/connect/VideoScreen'
import HomeScreen from './HomeScreen'

const MessageNavBar = createBottomTabNavigator(
  {
    Message: {
      screen: MessageScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <FontAwesomeIcon icon="home" color={tintColor}/>
        )
      },
    },
    Video: {
      screen: VideoScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <FontAwesomeIcon icon="comment-alt" color={tintColor}/>
        )
      }
    },
    // Records: {
    //   screen: RecordsScreen,
    //   navigationOptions: {
    //     tabBarIcon: ({ tintColor }) => (
    //       <FontAwesomeIcon icon="notes-medical" color={tintColor}/>
    //     )
    //   }
    // },
    // Directory: {
    //   screen: DirectoryScreen,
    //   navigationOptions: {
    //     tabBarIcon: ({ tintColor }) => (
    //       <FontAwesomeIcon icon="address-book" color={tintColor}/>
    //     )
    //   }
    // },
    // Learn: {
    //   screen: LearnScreen,
    //   navigationOptions: {
    //     tabBarIcon: ({ tintColor }) => (
    //       <FontAwesomeIcon icon="list-alt" color={tintColor}/>
    //     )
    //   }
    // },
  },
  {

    initialRouteName: 'Message',
    navigationOptions:  {
      title: 'Message',
      headerLeft: null,
      gesturesEnabled: false,
    },
    tabBarOptions: {
      inactiveBackgroundColor: '#333',
      inactiveTintColor: 'white',
      headerTintColor: '#333',
      activeBackgroundColor: 'white',
      activeTintColor: '#333',
      style: {
        backgroundColor: '#333',
      },
    }
  }
);

export default createAppContainer(MessageNavBar)