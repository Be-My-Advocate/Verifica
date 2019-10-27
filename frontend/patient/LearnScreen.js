import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import SearchBar from './SearchBar'


const LearnScreen = () => {
  const [searchText, setSearchText] = React.useState('')

  return <View>
  <SearchBar searchText={searchText} setSearchText={setSearchText}/>
  <Text>Learn</Text>
  </View>
}

export default LearnScreen