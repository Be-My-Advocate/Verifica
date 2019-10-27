import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import EULA from './EULA';
import TextBox from '../TextBox';
import { AsyncStorage } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 32,
    fontWeight: '700'
  },
  secondary: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    width: '80%'
  },
  button: {
    width: '70%',
    backgroundColor: '#333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 12,
    borderRadius: 12
  },
  buttonText: {
    color: 'white',
    margin: 12,
    fontSize: 18,
    fontWeight: '600'
  }
});

const RegisterScreen = props => {
  const [eula, setEula] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [password2, setPassword2] = React.useState('');
  const [error, setError] = React.useState('');

  const signup = () => {
    if (password === password2) {
      _storeData();
      props.navigation.push('patient');
    } else {
      setError('Passwords Dont Match');
    }

    if (!password.length || !password2.length) {
      setError('Please Fill In All Fields');
    }
  };

  const _storeData = async () => {
    try {
      await AsyncStorage.setItem('login', 'true');
      console.log('=====================> saving to storage');
    } catch (error) {
      console.log('=====================>', error);
    }
  };

  return (
    <View style={styles.container}>
      {!eula && <EULA setEula={setEula} navigation={props.navigation} />}
      <Text style={styles.title}>Verifica</Text>
      <Text style={styles.secondary}>
        Create an account to take full advantage of what the app has to offer
      </Text>
      <TextBox
        type={'email'}
        password={false}
        label={'Enter Email'}
        value={'jenni@gmail.com'}
      />
      <TextBox
        type={'password'}
        label={'Enter Password'}
        password
        value={'HCKHLTH'}
      />
      <TextBox
        type={'password'}
        label={'Retype Password'}
        password
        value={'HCKHLTH'}
      />
      {error !== '' && <Text>{error}</Text>}
      <TouchableOpacity style={styles.button} onPress={() => signup()}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
