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


//Components
import GatheringDetail from '../components/GatheringDetail';
import GroupDetail from '../components/GroupDetail';
import Gathernow from '../components/Gathernow';




export default function Gathering() {
  return(
    <View>
      <ScrollView>
        <GatheringDetail/>
        <Gathernow/>
// 스와이프..
      
        <GroupDetail/>
      </ScrollView>
    </View>);
}


