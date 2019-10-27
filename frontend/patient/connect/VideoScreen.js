import React, { WebView } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Linking
} from 'react-native';

const VideoScreen = props => {
  Linking.openURL(
    'https://harryhong.daily.co/fhir-demo?t=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyIjoiZmhpci1kZW1vIiwiZCI6IjE1ZGVkZjU3LTBmMjctNDEwMS1iNWM5LTIxNGExNTkzMTA3OSIsImlhdCI6MTU3MjE5NzU2Mn0.ynEzel_Xq4nI-hlQ9932tGkWgYlKWpAcBTChqkZJ9Bk'
  );
  return <View></View>;
};

export default VideoScreen;
