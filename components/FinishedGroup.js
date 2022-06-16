import { style } from 'dom-helpers';
import * as React from 'react';
import { Text, View, Image, ScrollView, StyleSheet } from 'react-native';

export default function FinishedGroup() {
  return (
    <View style={styles.groupList}>
        <View style={styles.setting}>
        <View style={styles.settingObj}>
        {/* <Image
            style={styles.settingImg}
            source={require('../assets/search.png')}
          ></Image> */}
          <Text style={styles.groupicon}> 😎</Text>
          <View style={styles.groupInfo}>
          <Text style={{ fontSize: 16, fontWeight: '500', marginTop: 20, }}>한달 읽어보기!</Text>
          <Text style={{ fontSize: 12, fontWeight: '300', marginTop: 5, marginBottom:10,}}>2022년 04월 26일 - 05월 27일 ·  3명</Text>
          </View>
        </View>
        </View>

    </View>
  );
}


const styles = StyleSheet.create({
    groupList: {
        marginTop: 20,
        margin: 10,
      },
    groupInfo: {
        flexDirection: 'column',
        marginBottom: 10,
      },
    groupicon:{
        margin: 10,
        fontSize:30,
        marginRight:15,
       
    },
    setting: {
        backgroundColor: 'white',
        marginBottom:12,
        
      },
      settingObj: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5,
      },
      settingImg: {
        width: 25,
        height: 25,
        margin: 20,
      },
    
      
    });
    