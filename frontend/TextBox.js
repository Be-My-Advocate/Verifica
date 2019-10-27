import React from 'react'
import {StyleSheet, Text, View, TextInput} from 'react-native'


const styles = StyleSheet.create({
  container:{
    width:'80%',
    margin: 8
  },
  label:{
    fontSize:16,
    fontWeight:'500'
  },
  inputBox:{
    borderColor:'#4B0082',
    borderWidth:1,
    fontSize: 24,
    padding:12,
    borderRadius:8
  }
});

const TextBox = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput autoCompleteType={props.type} secureTextEntry={props.password} style={styles.inputBox} onChangeText={props.onChange}/>
    </View>
  )
}

export default TextBox
