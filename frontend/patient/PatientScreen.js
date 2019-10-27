import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import SearchBar from './SearchBar'


const PatientScreen = () => {
  const [searchText, setSearchText] = React.useState('')

  return <View>
  <SearchBar searchText={searchText} setSearchText={setSearchText}/>
  <Text>Connecting</Text>
  </View>
}

export default PatientScreen