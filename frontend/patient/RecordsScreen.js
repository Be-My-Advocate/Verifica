import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import HealthRecords from './records/HealthRecords';
import MyPatientAdvocates from './records/MyPatientAdvocates';

const styles = StyleSheet.create({
  topButtons: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    padding: 18,
    justifyContent: 'space-evenly'
  },
  textSizes: {
    fontSize: 20
  },
  padHealthRecords: {
    margin: 20
  }
});

const RecordsScreen = () => {
  const [searchText, setSearchText] = React.useState('');
  const [recordButton, toggleRecordButton] = React.useState(true);

  return (
    <View>
      <View style={styles.topButtons}>
        <TouchableOpacity onPress={() => toggleRecordButton(!recordButton)}>
          <Text style={styles.textSizes}>Patient Records</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleRecordButton(!recordButton)}>
          <Text style={styles.textSizes}>Shared Records</Text>
        </TouchableOpacity>
      </View>

      {recordButton ? (
        <View style={styles.padHealthRecords}>
          <HealthRecords />
        </View>
      ) : (
        <View style={styles.padHealthRecords}>
          <MyPatientAdvocates />
        </View>
      )}
    </View>
  );
};

export default RecordsScreen;
