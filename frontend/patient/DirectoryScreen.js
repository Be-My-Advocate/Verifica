import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import SearchBar from './SearchBar'


const DirectoryScreen = () => {
  const [searchText, setSearchText] = React.useState('')

  return <View>
    <SearchBar searchText={searchText} setSearchText={setSearchText}/>
    <Text>Directory</Text>
  </View>
}

export default DirectoryScreen