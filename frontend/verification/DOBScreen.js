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
    backgroundColor: '#4B0082',
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

const DateScreen = (props) => {
  const [phone, setPhone] = React.useState('')
  const formatNumber = (number) => {
    if(number.length === 2){
      setPhone(number+'/')
    } else if(number.length === 5){
      setPhone(number+'/')
    }else{
      setPhone(number)
    }
  }
  const nextScreen = () => {
    if(phone.length===10)
      props.setScreen(5)
  }
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={70} enabled>
      <Text style={styles.title}>What is your date of birth?</Text>
      <TextInput style={styles.dialog} keyboardType={'phone-pad'} onChangeText={formatNumber} value={phone} placeholder={'MM/DD/YYYY'}/>
      <TouchableOpacity style={styles.button} onPress={nextScreen}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

export default DateScreen
