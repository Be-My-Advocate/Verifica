import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList
} from 'react-native';
import SearchBar from './SearchBar';
import AdvocateMessage from './connect/AdvocateMessage';
import MessageScreen from './connect/MessageScreen';
import MessageNavBar from '../MessageNavBar';
const styles = StyleSheet.create({
<<<<<<< HEAD
  headerText: {
    fontSize: 22,
    paddingBottom: 0,
  },
  padHealthRecords: {
    margin: 0,
=======
  padHealthRecords: {
    marginLeft: 5,
    marginRight: 5
>>>>>>> a62875196211af900d6acf78df7a3067cb7f9db4
  }
});

const advocateLocationArray = [
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
    location: { lat: 36.1296, lng: -115.1583 }
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
    location: { lat: 36.1396, lng: -115.1573 }
  }
];

const ConnectScreen = props => {
  const [searchText, setSearchText] = React.useState('');

  return (
    <View>
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <View style={styles.padHealthRecords}>
        <FlatList
          data={advocateLocationArray}
          renderItem={({ item }) => (
            <View>
              <AdvocateMessage
                press={() => props.navigation.push('message')}
                advocate={item}
              />
            </View>
          )}
          keyExtractor={item => item.data}
        />
      </View>
    </View>
  );
};

export default ConnectScreen;
