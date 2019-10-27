import React from 'react'
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native'
import VerifyPhone from '../verification/verifyPhone'
import InfoScreen from '../verification/InfoScreen'
import AddressScreen from '../verification/AddressScreen'
import DateScreen from '../verification/DOBScreen'


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Records = (props) => {
  const [stage, setStage] = React.useState(3)
  return (
    <View style={styles.container}>
      {stage === 1 && <InfoScreen setScreen={setStage}/>}
      {stage === 2 && <VerifyPhone setScreen={setStage}/>}
      {stage === 3 && <AddressScreen setScreen={setStage}/>}
      {stage === 4 && <DateScreen setScreen={setStage}/>}
    </View>
  )
}

export default Records
