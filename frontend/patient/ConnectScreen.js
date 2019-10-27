import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native'
import SearchBar from './SearchBar'
import AdvocateMessage from './connect/AdvocateMessage'
const styles = StyleSheet.create({
  headerText: {
    fontSize: 22,
    paddingBottom: 20,
  },
  padHealthRecords: {
    margin: 20,
  }
});

const advocateLocationArray = [
  {
    id: 3,
    username: 'adv',
    password: 'adv',
    fname: 'John',
    lname: 'Doe',
    gender: 'Male',
    email: 'john@gmail.com',
    role: 'doctor',
    photo: require('../images/manone.jpg'),
    rating: 5,
    location: {lat: 36.1162, lng: -115.1745},
  },
  {
    id: 4,
    username: 'ad',
    password: 'ad',
    fname: 'Christina',
    lname: 'Ruiz',
    gender: 'Female',
    email: 'chris@gmail.com',
    role: 'advocate',
    photo: require('../images/womanone.jpg'),
    rating: 3,
    location: {lat: 36.1279, lng: -115.1610},
  },
  {
    id: 5,
    username: 'aaa',
    password: 'aaa',
    fname: 'Samantha',
    lname: 'Lane',
    gender: 'Female',
    email: 'sam@gmail.com',
    role: 'advocate',
    photo: require('../images/womantwo.jpg'),
    rating: 4,
    location: {lat: 36.1196, lng: -115.1581},
  },
  {
    id: 6,
    username: 'bbb',
    password: 'bbb',
    fname: 'Matt',
    lname: 'Williamson',
    gender: 'Male',
    email: 'matt@gmail.com',
    role: 'doctor',
    photo: require('../images/mantwo.jpg'),
    rating: 1,
    location: {lat: 36.1136, lng: -115.1621},
  },
  {
    id: 7,
    username: 'bbb',
    password: 'bbb',
    fname: 'Angelica',
    lname: 'Thompson',
    gender: 'Female',
    email: 'ang@gmail.com',
    role: 'doctor',
    photo: require('../images/womanthree.jpg'),
    rating: 5,
    location: {lat: 36.1186, lng: -115.1571},
  },
  {
    id: 8,
    username: 'bbb',
    password: 'bbb',
    fname: 'Brandon',
    lname: 'Lampkin',
    gender: 'Male',
    email: 'brand@gmail.com',
    role: 'advocate',
    photo: require('../images/manthree.jpg'),
    rating: 3,
    location: {lat: 36.1296, lng: -115.1583},
  },
  {
    id: 9,
    username: 'bbb',
    password: 'bbb',
    fname: 'Stephanie',
    lname: 'Hall',
    gender: 'Female',
    email: 'steph@gmail.com',
    role: 'advocate',
    photo: require('../images/womanfour.jpg'),
    rating: 2,
    location: {lat: 36.1396, lng: -115.1573},
  },
]

const ConnectScreen = () => {
  const [searchText, setSearchText] = React.useState('')

  return <View>
    <SearchBar searchText={searchText} setSearchText={setSearchText}/>


    <View style={styles.padHealthRecords}>
      <Text style={styles.headerText}>Messages</Text>
      <FlatList data={advocateLocationArray} renderItem={({item}) => <View>
        <AdvocateMessage advocate={item}/>
      </View>} keyExtractor={item => item.data}
      />
    </View>
  </View>
}

export default ConnectScreen