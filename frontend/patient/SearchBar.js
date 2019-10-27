import React from 'react'
import {TextInput, View, StyleSheet} from 'react-native'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
    margin: 4,
    width: '90%',
  },
  purple: {
    backgroundColor: '#333',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputStyle: {
    padding: 8,
    flex: 1,
  },
  iconStyle: {
    marginRight: 7,
    marginLeft: 2,
  },
  marginLefts: {
    marginLeft: 7,
  }
})

const SearchBar = (props) => {
  return <View style={styles.purple}>
    <View style={styles.searchContainer}>
    <FontAwesomeIcon style={styles.marginLefts} icon={'search'} color='#ddd' size={25}/>
  <TextInput
  style={styles.inputStyle}
  placeholder="Search"
  onChangeText={(text)=>props.setSearchText(text)}
  value={props.searchText}
  />
  </View>
  <FontAwesomeIcon style={styles.iconStyle} icon={'filter'} color='#fff' size={25}/>
  </View>
}

export default SearchBar