import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';



// export default function Groupsnow() {
//     return (

//   <View style={{ flex: 3 }}>
//     <ScrollView
// horizontal={true}>
//       <Text>1</Text>
//       <Text>2</Text>
//       <Text>3</Text>
//     </ScrollView>
//   </View>

    
    //     );
    //   }

const DATA = [
    {
      id: '1',
      title: '여기 가로 슬라이드 해야해',
    },
    {
      id: '2',
      title: '원하는 그룹 만들기',
    },
    {
      id: '3',
      title: '받은 초대코드 입력하기',
    },
    {
      id: '4',
      title: '오픈 그룹 찾기',
    },
  ];
  
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  
  const GroupDetail = () => {
    const renderItem = ({ item }) => (
      <Item title={item.title} />
    );
  
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
      backgroundColor: "#ffffff",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 15,
    },
  });
  
  
  export default GroupDetail;
      
      