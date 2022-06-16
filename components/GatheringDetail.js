import * as React from 'react';
import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
  Image,
} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';

import OngoingGroup from './OngoingGroup';
import FinishedGroup from './FinishedGroup';

const options = [
  { label: '진행중', value: '1' },
  { label: '종료된', value: '2' },
];

export default function GatheringDetail() {
  const [pagenum, setPageNum] = useState('1');

  function functionCombined(value) {
    setPageNum(value);
    print();
  }

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>독서모임</Text>
      <SwitchSelector
        options={options}
        initial={0}
        selectedColor={'#ffffff'}
        buttonColor={'#4596ff'}
        onPress={(value) => setPageNum(value)}
        height={35}
        style={styles.button}
      />
      {pagenum === '1' && <OngoingGroup></OngoingGroup>}
      {pagenum === '2' && <FinishedGroup></FinishedGroup>}
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    margin: 20,
    marginTop: 50,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
  },
  button: {
    marginTop: 20,
  },
  underline: {
    borderWidth: 0.5,
  },
  
});
