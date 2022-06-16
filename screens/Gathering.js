import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
  Image,
  Dimensions,
} from 'react-native';
import GatheringDetail from '../components/GatheringDetail';

const screenHeight = Dimensions.get('screen').height;
export default function Gathering() {
  return (
    <View style={{ height: screenHeight }}>
      <ScrollView>
        <GatheringDetail />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 400,
  },
});
