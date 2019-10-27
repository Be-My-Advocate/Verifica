import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '80%',
    margin: 8
  },
  label: {
    fontSize: 16,
    fontWeight: '500'
  },
  inputBox: {
    borderColor: '#333',
    borderWidth: 1,
    fontSize: 24,
    padding: 12,
    borderRadius: 8
  }
});

const TextBox = props => {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <Text style={styles.label}>{props.label}</Text> 
      <TextInput autoCompleteType={props.type} secureTextEntry={props.password} style={styles.inputBox} value={props.value} onChangeText={props.onChange}/>
=======
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        value={props.value}
        autoCompleteType={props.type}
        secureTextEntry={props.password}
        style={styles.inputBox}
      />
>>>>>>> a62875196211af900d6acf78df7a3067cb7f9db4
    </View>
  );
};

export default TextBox;
