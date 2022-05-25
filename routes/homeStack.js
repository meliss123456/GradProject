import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Stacks
import Home from '../screens/home';
import Mypage from '../screens/mypage';
import Library  from '../screens/library';
import Gathering from '../screens/Gathering';

const Tab = createBottomTabNavigator();

const Root = ({navigation})=>{
  return(
    <Tab.Navigator>
        <Tab.Screen
          name = "Home"
          component={Home}
          />
          <Tab.Screen
          name = "서재"
          component={Library}
          />
          <Tab.Screen
          name = "모임"
          component={Gathering}
          />
         <Tab.Screen
          name = "마이페이지"
          component={Mypage}
          />
    </Tab.Navigator>
  )
}

/*
const screens = {
  Home: {
    screen: Home,
  },
  profile: {
    screen: Profile,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
*/

export default function index(){
  return(
    <NavigationContainer>
      <Root/>
    </NavigationContainer>
  );
};