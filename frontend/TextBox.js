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
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        value={props.value}
        autoCompleteType={props.type}
        secureTextEntry={props.password}
        style={styles.inputBox}
      />
    </View>
  );
};

export default TextBox;
