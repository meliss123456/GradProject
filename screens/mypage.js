import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
  Image,
} from 'react-native';

//Components
import ProfileDetail from '../components/ProfileDetail';

export default function Profile() {
  return (
  <View>
    <ScrollView>
      <ProfileDetail/>
    </ScrollView>
  </View>);
}


const styles = StyleSheet.create({
  title:{
    fontSize:20,
    fontWeight:400,

  }
})