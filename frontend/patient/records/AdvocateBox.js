import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center'
  },
  iconPadding: {
    padding: 5,
    margin: 10,
  },
  textStyles: {
    fontSize: 20,
  },
})

const AdvocateBox = (props) => {
  return <View style={styles.container}>

      <FontAwesomeIcon style={styles.iconPadding} icon={'user-circle'} size={50}/>
      <Text style={styles.textStyles}>{props.text}</Text>

  </View>
}

export default AdvocateBox