import React from 'react'
import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const styles = StyleSheet.create({
  image: {width: 75, height: 75, borderColor: 'pink', borderWidth: 1, borderRadius: 35},
  container: {
    backgroundColor: '#eee',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    alignItems: 'center',
    margin: 20,
  },
  padding: {
    padding: 10
  }
})

const AdvocateMessage = (props) => {
  return <TouchableOpacity style={styles.container}>
    <Image source={props.advocate.photo} style={styles.image}/>
    <Text style={styles.padding}>Send a message to {props.advocate.fname}</Text>
    </TouchableOpacity>
}

export default AdvocateMessage