import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'


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
    fontSize:16,
    fontWeight:'400',
    marginBottom:16,
    textAlign:'center'
  },
  login:{
    fontSize:18
  }
});

const InfoScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify your identity</Text>
      <Text style={styles.dialog}>In order to verify your identity with your healthcare providers, we are required to verify some details</Text>
      <TouchableOpacity style={styles.button} onPress={() => props.setScreen(2)}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}

export default InfoScreen
