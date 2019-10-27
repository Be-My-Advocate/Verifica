import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'


const HomeScreen = () => {
  const [searchText, setSearchText] = React.useState('')

  return <View>
    <TouchableOpacity onPress={() => props.navigation.push('patient')}>
      <Text>Enter Verifica</Text>
    </TouchableOpacity>
  </View>
}

export default HomeScreen