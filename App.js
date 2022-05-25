import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
  Image,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Home from './screens/home';
import Navigator from './routes/homeStack';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Navigator></Navigator>
    </View>
  );
}
// 이거롤 다시 보내봐
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'f4f2ed' },
  intro: { marginTop: 100, alignItems: 'center' },
  character: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    marginTop: 25,
  },
  text: { textAlign: 'center', fontSize: 16 },
});
