/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React,{useState} from 'react';
//  import type  from 'react';
 import {
   Button,
   FlatList,
   Linking,
   RefreshControl,
   SafeAreaView,
   ScrollView,
   SectionList,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   TextInput,
   TouchableOpacity,
   Pressable,
   Alert,
   ToastAndroid,
   Modal,
   Image,
   ImageBackground,
  // Button
 } from 'react-native';
// import ScreenA  from './src/screens/ScreenA';
// import ScreenB from './src/screens/ScreenB';


//  import {
//    Colors,
//    DebugInstructions,
//    Header,
//    LearnMoreLinks,
//    ReloadInstructions,
//  } from 'react-native/Libraries/NewAppScreen';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import VanshButton from './src/utils/CustomButton';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { createDrawerNavigator } from '@react-navigation/drawer';
// import Home from './src/screens/Home';
import Main from './src/screens/Main';
import Login from './src/screens/Login';
import CreateAccount from './src/screens/CreateAccount';
// import { Provider } from 'react-redux';
// import  {Store}  from './src/redux/store';
// import Map from './src/screens/Map';
// import Camera from './src/screens/Camera';
import 'react-native-gesture-handler';
import SelectFruit from './src/screens/SelectFruit';
import ForgetPassword from './src/screens/ForgetPassword';
import Verification from './src/screens/Verification';
import Support from './src/screens/Support';
import Question from './src/screens/Question';
import BananaQuestion1 from './src/screens/BananaQuestion1';
import BananaQuestion2 from './src/screens/BananaQuestion2';
import BananaQuestion3 from './src/screens/BananaQuestion3';
import AppleQuestion3 from './src/screens/AppleQuestion3';

// const Tab=createBottomTabNavigator();
// const Tab=createMaterialBottomTabNavigator();
// const Tab=createMaterialTopTabNavigator();
const Stack=createStackNavigator();

// const Drawer = createDrawerNavigator();
function App()
{
  return(
    // <Provider  store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          // screenOptions={({route })=>({
          //   tabBarIcon: ({focused,size,color})=>{
          //     let iconName;
          //     if (route.name==='ScreenA')
          //     {
          //       iconName='autoprefixer';
          //       size=focused ? 25:20;
          //       color=focused?'#f0f' :'#555';
          //     } else if(route.name==='ScreenB'){
          //       iconName='btc';
          //       size=focused ? 25:20;
          //       color=focused?'#f0f' :'#555';
          //     }
          //     return (
          //       <FontAwesome5
          //         name={iconName}
          //         size={size}
          //         color={color}
          //       />  
          //     )
          //   }
          // })}
          // tabBarOptions={{
          //   activeTintColor:'#f0f',
          //   inactiveTintColor:'#555',
          //   activeBackgroundColor:'#fff',
          //   inactiveBackgroundColor:'#999',
          //   showLabel:true,
          //   labelStyle:{fontSize:14},
          // }}
          // activeColor='#f0edf6'
          // inactiveColor='#3e2465'
          // barStyle={{backgroundColor:'#694fad'}}
          initialRouteName='AppleQuestion3'
          // drawerPosition='left'
          // drawerType="front"
          // edgeWidth={100}
          // hideStatusBar={false}
          // overlayColor='#00000090'
          // drawerStyle={{
          //   backgroundColor:'#6e6',
          //   width:350,
          // }}
          screenOptions={{
            headerShown:true,
            swipeEnabled:true,
            gestureEnabled:true,
            headerTitleAlign:'center',
            headerStyle:{
              backgroundColor:'#0080ff'
            },
            headerTintColor:'#ffffff',
            headerTitleStyle:{
              fontSize:25,
              fontWeight:'bold',
            }
          }}
        >
    {/* <VanshButton
       onPressFunction={onPressHandler}
       title={submitted ? 'Clear' : 'Submit'}
       color={'#00ff00'}
     />
     <VanshButton
       onPressFunction={()=>{ }}
       title={'Test'}
       color={'#ffcd00'}
       style={{margin:10}}
     />
     <Pressable
       onPress={onPressHandler}
       hitSlop={{top:10,bottom:10,right:10,left:10}}
       android_ripple={{color:'#00f'}}
       style={({pressed})=>[
         {backgroundColor:pressed ? '#dddddd' : '#00ffff'},
         styles.button
       ]}
       
     >
       <Text style={styles.text}>
         {submitted ? 'Clear':'Submit'}
       </Text>
     </Pressable> */}
     
          <Stack.Screen
            name="AppleQuestion3"
            component ={AppleQuestion3}
            options={{
              headerShown:false
            //   header:()=>null,
            //   tabBarBadge:3
            // }}
            // options={{
            //   title:'ScreenA Title',
            //   drawerIcon:({focused})=>(
            //     <FontAwesome5
            //       name="autoprefixer"
            //       size={focused? 25: 20}
            //       color={focused ?'#0ff':'#999999'}
            //     />
            //   )
            }}
          />

          
        </Stack.Navigator>
      </NavigationContainer>
    // </Provider>
  )
}

export default App;