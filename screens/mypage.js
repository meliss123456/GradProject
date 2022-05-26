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
import MypageBarDetail from '../components/MypageBarDetail';

export default function Profile() {
  return (
    <View>
      <ScrollView>
        <MypageBarDetail />
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
