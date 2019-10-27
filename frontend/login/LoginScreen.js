import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native'

const styles = StyleSheet.create({
  loginText: {
    flex: 1,
    backgroundColor: '#fff',
    fontWeight: "500",
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBox: { height: 40, margin: 5, width: 200, borderColor: 'gray', borderWidth: 1 },
  button: {borderColor: 'salmon', borderWidth: 1, backgroundColor: 'pink'},
});

const LoginScreen = (props) => {
  const [username, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(false);

  const loginPatientOrAdvocate = () => {
    // getUserData(username, password).then()
    if (username === 'patient' || username === 'Patient' || password === 'patient') {
      props.navigation.push('patient')
    }
    if (username === 'advocate' || username === 'Advocate' || password === 'advocate') {
      props.navigation.push('advocate')
    }
    else {setError(true)}
  }

  return <View style={styles.loginText}>
    <Text>Login</Text>
    <TextInput
      style={styles.textBox}
      onChangeText={text => setUserName(text)}
      value={username}/>
    <TextInput
      style={styles.textBox}
      onChangeText={text => setPassword(text)}
      value={password}/>

    <TouchableOpacity onPress={loginPatientOrAdvocate} style={styles.button}>
      <Text>Let's Go!</Text>
    </TouchableOpacity>
    {error && <Text>Login failed!</Text>}
  </View>
}

export default LoginScreen