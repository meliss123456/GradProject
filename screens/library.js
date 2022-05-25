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
import LibraryBar from '../components/LibraryBar';

export default function Library() {
  return (
    <View>
      <ScrollView>
        <LibraryBar />
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
