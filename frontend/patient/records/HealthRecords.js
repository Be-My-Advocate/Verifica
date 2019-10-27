import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList
} from 'react-native';
import RecordBox from './RecordBox';

const records = [
  'Vitals',
  'Allergies',
  'Clinical Vitals',
  'Conditions',
  'Immunizations',
  'Lab Results',
  'Medications'
];

const styles = StyleSheet.create({
  headerText: {
    fontSize: 22,
    paddingBottom: 20
  }
});

const HealthRecords = () => {
  return (
    <View>
      <Text style={styles.headerText}>Health Records</Text>
      <FlatList
        data={records}
        renderItem={({ item }) => (
          <View>
            <RecordBox text={item} />
          </View>
        )}
        keyExtractor={item => item.data}
      />
    </View>
  );
};

export default HealthRecords;
