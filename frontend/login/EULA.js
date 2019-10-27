import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity, Modal} from 'react-native'

const styles = StyleSheet.create({
  modal:{
    width:'80%',
    height:'80%',
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:'auto',
    marginBottom:'auto',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height:'10%',
  },
  headerText:{
    textAlign:'center',
    fontSize:32,
    fontWeight:'700',
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    height:'70%',
  },
  buttons: {
    display:'flex',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    height:'10%',
  },
  button: {
    width: '40%',
    backgroundColor: '#4B0082',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin:16,
    borderRadius:12,
  },
  buttonText:{
    color:'white',
    margin: 12,
    fontSize: 16,
    fontWeight: '600',
  },
});

const EULA = (props) => {
  return(
    <Modal>
      <View style={styles.modal}>
        <View style={styles.header}>
          <Text style={styles.headerText}> End User License Agreement </Text>
        </View>
        <View style={styles.body}>
          <Text>
            This is where the end user license agreement but I really dont want to type it out so 💁‍♂️
          </Text>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={() => {props.setEula(true)}}>
            <Text style={styles.buttonText}>Agree</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => props.navigation.goBack()}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

export default EULA
