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
  padHealthRecords: {
    marginLeft: 5,
    marginRight: 5
  }
});

const advocateLocationArray = [
  {
    key: 5,
    username: 'aaa',
    password: 'aaa',
    fname: 'Samantha',
    lname: 'Lane',
    gender: 'Female',
    email: 'sam@gmail.com',
    role: 'advocate',
    photo: require('../images/womantwo.jpg'),
    rating: 4,
    location: { lat: 36.1196, lng: -115.1581 }
  },
  {
    key: 6,
    username: 'bbb',
    password: 'bbb',
    fname: 'Matt',
    lname: 'Williamson',
    gender: 'Male',
    email: 'matt@gmail.com',
    role: 'doctor',
    photo: require('../images/mantwo.jpg'),
    rating: 1,
    location: { lat: 36.1136, lng: -115.1621 }
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
