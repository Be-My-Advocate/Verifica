import React from 'react'
import {StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native'


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    margin:24,
    fontSize:32,
    fontWeight:'700',
    textAlign: 'center'

  },
  button: {
    width: '70%',
    backgroundColor: '#333',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin:32,
    marginTop:'auto',
    borderRadius:12,
  },
  buttonText:{
    color:'white',
    margin: 12,
    fontSize: 24,
    fontWeight: '600',
  },
  dialog:{
    fontSize:24,
    fontWeight:'400',
    marginBottom:32,
    width: '60%',
    display:'flex',
    textAlign:'center'
  },
  login:{
    fontSize:18
  }
});

const AddressScreen = (props) => {
  const[address, setAddress] = React.useState('')
  const[apt, setApt] = React.useState('')
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={70} enabled>
      <Text style={styles.title}>Upload your driver's license?</Text>
      <Text style={styles.dialog}>To verify your identity with healthcare providers, we are required to have your ID on file.
        <View>
        </View>
      <TouchableOpacity style={styles.button} onPress={() =>{props.setScreen(6)}}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

export default AddressScreen
