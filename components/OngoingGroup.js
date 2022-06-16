import { style } from 'dom-helpers';
import * as React from 'react';
import { Text, View, Image, ScrollView, StyleSheet } from 'react-native';

export default function OngoingGroup() {
  return (

    
    <View style={styles.groupList}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.group}>
          
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            
          <Image
            style={styles.bookImg}
            source={{
              uri: 'http://ojsfile.ohmynews.com/STD_IMG_FILE/2020/0418/IE002632888_STD.jpg',
            }}
          ></Image>
          <Image
            style={styles.bookImg}
            source={{
              uri: 'https://newsimg.sedaily.com/2019/10/30/1VPQ0XY4RJ_1.jpg',
            }}
          ></Image>
          <Image
            style={styles.bookImg}
            source={{
              uri: 'http://www.readersnews.com/news/photo/201707/73990_32707_616.jpg',
            }}
          ></Image>
        </ScrollView>
        <Text style={styles.grouptitle}>추리 뽀개기</Text>
        <Text style={styles.datetext}>2022. 04. 22 - 2022. 06. 18</Text>
        
   
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Image
            style={styles.profileImg}
            source={require('../assets/profile12.png')}
          ></Image>
          <Image
            style={styles.profileImg}
            source={require('../assets/profile11.jpg')}
          ></Image>
          <Image
            style={styles.profileImg}
            source={require('../assets/img1.png')}
          ></Image>
          <Text style={styles.groupmembertext}>+ 멤버 보기</Text>
        </ScrollView>
        </View>

        <View style={styles.group}>
          
            <Image
              style={{ width: 110, height: 140, marginTop: 25,   }}
              source={require('../assets/people2.png')}
            ></Image>
           
          <Text style={{ fontSize: 22, fontWeight: '300', margin: 10, }}>다른 주제로 참여해 보세요</Text>
       
          
            <Text style={{ fontSize: 12, fontWeight: '300', margin: 5, borderStyle: 'solid', }}> 그룹 가이드 보기</Text>
        
          </View>
  

        </ScrollView>


        <Text> </Text> 
        {/* 슬라이드바 */}



        <View style={styles.setting}>
        <View style={styles.settingObj}>
        <Image
            style={styles.settingImg}
            source={require('../assets/plus.png')}
          ></Image>
          <Text style={{ fontSize: 16, fontWeight: '500', margin: 20, }}>원하는 그룹 만들기</Text>
        </View>
        </View>

        <View style={styles.setting}>
        <View style={styles.settingObj}>
        <Image
            style={styles.settingImg}
            source={require('../assets/communityInActive.png')}
          ></Image>
          <Text style={{ fontSize: 16, fontWeight: '500', margin: 20, }}>받은 초대 코드 입력하기</Text>
        </View>
        </View>

        <View style={styles.setting}>
        <View style={styles.settingObj}>
        <Image
            style={styles.settingImg}
            source={require('../assets/search.png')}
          ></Image>
          <Text style={{ fontSize: 16, fontWeight: '500', margin: 20, }}>오픈 그룹 찾기</Text>
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
  group: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 15,
    marginRight:30,
    backgroundColor: 'white',
    width: 360,
  },
  groupmemeber: {
    flexDirection: 'row',
   // alignItems: 'center',
  //  marginBottom: 40,
  },
  groupmake: {
    flexDirection: 'row',
   alignItems: 'center',
  //  marginBottom: 40,
  },
  profileImg: {
    height: 36,
    width: 36,
    borderRadius: 100 / 2,
    margin: 2,
    marginBottom: 25,
    marginTop:5,
  },
  bookImg: {
    width: 75,
    height: 100,
    borderRadius: 5,
    marginRight: 20,
    marginLeft:20,
    
    
    marginTop: 30,
  },
  grouptitle: {
    fontWeight: '500',
    fontSize: 18,
    marginTop:15,
  },
  datetext: {
    fontWeight: '300',
    fontSize: 13,
    marginTop:5,
    marginBottom:15,
   marginRight: 10,
  },
  groupmembertext:{
    alignItems: 'center',
    fontSize:13,
    margin: 12,
    marginTop:15,
  },

  //-----------
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
    marginLeft: 20,
  },

  
});
