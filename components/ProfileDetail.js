import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
  Image,
} from 'react-native';
import SwitchSelector from "react-native-switch-selector";


const options = [
    { label: "내 정보", value: "1" },
    { label: "친구목록", value: "2" },
    { label: "빌려준 책 목록", value: "3" },
    { label: "설정", value: "4" }
  ];

export default function ProfileDetail() {
/*
    
    const myInfo =() =>{
        return (
            <View>
                <Text>내 정보</Text>
            </View>
        );
    };
    
    const friendsList = function(){
        return (
            <View>
                <Text>친구정보</Text>
            </View>
        )
    };

    const [pageType, setPageType] = React.useState("1")

    const Page1 = () => {return(<View><myInfo></myInfo></View>)};
    const Page2 = ()=> {return(<View><friendsList></friendsList></View>)};
*/

  return (
  <View style={styles.rootContainer}>
      <Text style={styles.title}>마이페이지</Text>
      <SwitchSelector
  options={options}
  initial={0}
  selectedColor={"#ffffff"}
  buttonColor={"#4596ff"}
  onPress={value => console.log(`Call onPress with value: ${value}`)}
  height={35}
  style={styles.button}
  
/>

  </View>
  );
}


const styles = StyleSheet.create({
    rootContainer : {
        margin:20,
        marginTop: 50,
        flex:1,
        justifyContent:"center"
    }
    ,
  title:{
    fontSize:20,
  },
  button:{
      marginTop:20,

  },
  underline:{
    borderWidth: 0.5
  }
})