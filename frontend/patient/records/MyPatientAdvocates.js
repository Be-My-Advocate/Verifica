import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native'
import AdvocateBox from './AdvocateBox'

const advocates = ['Katherine Jones', 'Arthur Adams', 'Amanda Williamson']

const styles = StyleSheet.create({
  headerText: {
    fontSize: 22,
    paddingBottom: 20,
  },
  padText:{
    padding: 20,
  }
})

const MyPatientAdvocates = () => {
  return <View>
    <Text style={styles.headerText}>My Patient Advocates</Text>
    <FlatList data={advocates} renderItem={({item}) => <View>
      <AdvocateBox text={item}/>
    </View>} keyExtractor={item => item.data}
    />
    <Text style={styles.padText}>Find more patient advocates...</Text>
  </View>
}

export default MyPatientAdvocates