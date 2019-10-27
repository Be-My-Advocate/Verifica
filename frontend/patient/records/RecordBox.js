import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ddd'
  },
  iconPadding: {
    padding: 5,
    margin: 10,
  },
  textStyles: {
    fontSize: 20,
  },
  flexAgain: {
    flexDirection: 'row',
    alignItems: 'center',
  }
})

const RecordBox = (props) => {
  return <View style={styles.container}>

    <View style={styles.flexAgain}>
      <FontAwesomeIcon style={styles.iconPadding} icon={'file-medical'}/>
      <Text style={styles.textStyles}>{props.text}</Text>
    </View>

    <FontAwesomeIcon style={styles.iconPadding} icon={'chevron-right'}/>
  </View>
}

export default RecordBox