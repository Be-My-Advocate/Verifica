import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const MessageScreen = () => {
  return <View>
    <TouchableOpacity><FontAwesomeIcon icon={'coffee'}/></TouchableOpacity>
    <Text>we made it</Text>
  </View>
}

export default MessageScreen