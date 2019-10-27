import React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderColor: 'pink',
    borderWidth: 1,
    borderRadius: 50
  },
  container: {
    backgroundColor: '#eee',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    alignItems: 'center',
    marginLeft: 2,
    marginRight: 2,
    marginTop: 7,
    marginBottom: 7
  },
  padding: {
    padding: 10
  }
});

const AdvocateMessage = props => {
  return (
    <TouchableOpacity onPress={props.press} style={styles.container}>
      <Image source={props.advocate.photo} style={styles.image} />
      <Text style={styles.padding}>
        Send a message to {props.advocate.fname}
      </Text>
    </TouchableOpacity>
  );
};

export default AdvocateMessage;
