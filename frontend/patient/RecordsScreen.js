import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import SearchBar from './SearchBar'


const RecordsScreen = () => {
  const [searchText, setSearchText] = React.useState('')

  return <View>
  <SearchBar searchText={searchText} setSearchText={setSearchText}/>
  <Text>Records</Text>
  </View>
}

export default RecordsScreen