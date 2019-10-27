import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput, ScrollView} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import RecordBox from '../records/RecordBox'

const styles = StyleSheet.create({
  mainBox:{
    flex: 1,
    backgroundColor: '#ddd'
  },
  messageView: {
    height: '93%',
  },
  textBox: {
    width: '80%',
    height: 30,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ddd',
    backgroundColor: 'white'
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  userMessage: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 20,
    padding: 20,
    width: '70%',
    backgroundColor: 'teal',
  },
  otherMessage: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: 20,
    padding: 20,
    width: '70%',
    backgroundColor: 'pink',
  },
})

const MessageScreen = () => {
  const [message, setMessage] = React.useState('')
  //{message: '', role: 'user' | 'other'}
  const [messageArray, setMessageArray] = React.useState([])

  React.useEffect(( ) => {
    if (messageArray.length > 1 && messageArray.length % 2){
      let tempArray = [{message: "hey whats up", role: 'other'}]
      setMessageArray([...messageArray, ...tempArray])
      setMessage('')
    }
  }, [messageArray])

  const formatMessage = (item) => {
    if (item.role === 'user'){
      return <View><Text style={styles.userMessage}>{item.message}</Text></View>
    }
    return <View><Text style={styles.otherMessage}>{item.message}</Text></View>
  }

  const sendMessage = () => {
    let tempArray = [{message: message, role: 'user'}]
    setMessageArray([...messageArray, ...tempArray])
    setMessage('')
  }

  return <View style={styles.mainBox}>
    <ScrollView style={styles.messageView}>
      <FlatList data={messageArray} renderItem={({item, index}) => {
        return formatMessage(item, index)
      }} keyExtractor={item => item}
      />
    </ScrollView>
    <View style={styles.flexRow}>
      <FontAwesomeIcon icon={'camera'} size={30}/>
      <TextInput
        value={message}
        onChangeText={(text)=> setMessage(text)}
        style={styles.textBox}
      />
      <TouchableOpacity onPress={() => sendMessage()}><FontAwesomeIcon icon={'paper-plane'} size={30}/></TouchableOpacity>
    </View>
  </View>
}

export default MessageScreen