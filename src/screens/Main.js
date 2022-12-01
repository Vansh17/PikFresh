import { DrawerActions, DrawerRouter, NavigationContainer } from "@react-navigation/native";
import React, { useState,useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Alert,
    TextInput,
    ImageBackground,
    Button,
    Pressable,
    // CustomButton,
  } from 'react-native';
  // import { createDrawerNavigator } from "@react-navigation/drawer";
  // import { NavigationContainer } from "@react-navigation/native";
  // import { ImageBackground } from "react-native";
// import CustomButton from '../utils/CustomButton';

// import AsyncStorage from "@react-native-async-storage/async-storage";
// import SQLite from 'react-native-sqlite-storage';
// import { useSelector, useDispatch } from "react-redux";
// import { setName,setAge } from "../redux/actions";
// import PushNotification from "react-native-push-notification";

// const db =SQLite.openDatabase(
//     {
//         name:'MainDB',
//         location:'default',
//     },
//     ()=>{ },
//     error=>{console.log(error)}
// );
// const Drawer = createDrawerNavigator();
// const Drawer = createDrawerNavigator();

  export default function Main({navigation})
  {
    // const [submitted,SetSubmitted]=useState(false)
    // const onPressHandler = () =>{
    //   SetSubmitted(!submitted)
    // };

    return (
      // <NavigationContainer>
      //   <Drawer.Navigator>
      
        <View
        style={styles.container}
        >
          
          <ImageBackground
        style={styles.img}
        source={require('../../assets/Home.png')}
        // resizeMode="cover"
      >
        <Pressable style={styles.login} >
          {/* <Image style={styles.logo}  source = {require('../../assets/scan_img.png')}/> */}
          <Text style={styles.loginbutton}>Login</Text>
        </Pressable>
            <Text style={styles.title}>
                PikFresh
            </Text>
            <Text style={styles.goodq}>
                ..A future to good quality 
            </Text>
            {/* <Pressable style={styles.button} >
          <Text style={styles.stylebutton}>Scan</Text>
        </Pressable> */}
      
        <Pressable style={styles.button1} >
          <Image style={styles.logo}  source = {require('../../assets/scan_img.png')}/>
          <Text style={styles.stylebutton1}>Scan</Text>
        </Pressable>
        <Pressable style={styles.button2} >
        <Image style={styles.logo}  source = {require('../../assets/report_img.png')}/>
          <Text style={styles.stylebutton2}>Reports</Text>
        </Pressable>
        <Pressable style={styles.button3} >
        <Image style={styles.logo}  source = {require('../../assets/support_img.png')}/>
          <Text style={styles.stylebutton3}>Support</Text>
        </Pressable>
        
            {/* <Button
              title='Scan'
              color="#9BCCA5"
              style={styles.button}
              // onPress={onPressHandler}
            /> */}
            </ImageBackground>
            {/* <CustomButton
             title="Scan"
             color="#1eb900"
            /> */}
            {/* </Drawer> */}
       </View>
    //    </Drawer.Navigator>
    //    </NavigationContainer>
    )
  }

  const styles = StyleSheet.create({
    title:{
        textAlign:"center",
        color:"#0B5635",
        fontSize:48,
        fontFamily:'OleoScript-Regular',
        marginTop:80,
        
    },
    img:{
      height: '100%',
      width:'100%',

    },
    container:{
      flex:1,
    },
    goodq:{
      marginLeft:160,
      color:"#0B5635",
        fontSize:20,
        fontFamily:'OleoScript-Regular',
    },
    button:{
      fontFamily:'OleoScript-Regular',
    },
    stylebutton:{
      fontSize:36,
      fontFamily:'OleoScript-Regular',
      alignItems: 'center',
      justifyContent: 'center',
    },
    

    stylebutton1:{
      //flex:1,
      bottom:55,
      color:"#0B5635",
      marginRight:170,
      fontSize:36,
      fontFamily:'OleoScript-Regular',
      marginBottom:10,
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    stylebutton2:{
      //flex:1,
      bottom:60,
      color:"#0B5635",
      fontSize:36,
      marginRight:130,
      fontFamily:'OleoScript-Regular',
      textAlign:'left',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    stylebutton3:{
      //flex:1,
      bottom:60,
      color:"#0B5635",
      marginRight:125,
      fontSize:36,
      fontFamily:'OleoScript-Regular',
      textAlign:'left',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    button1: {
      textAlign:'left',
      backgroundColor:"#9bcca5",
      fontSize:36,
      fontFamily:'OleoScript-Regular',
      alignItems: 'center',
      justifyContent: 'center',
      width:316,
      height:91,
      marginTop:170,
      marginLeft:30,
      marginRight:50,
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius:20,
    },
    button2: {
      backgroundColor:"#9bcca5",
      fontSize:36,
      fontFamily:'OleoScript-Regular',
      alignItems: 'center',
      justifyContent: 'center',
      width:316,
      height:91,
      //flexDirection: "centr",
      marginTop:25,
      marginLeft:30,
      marginRight:50,
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius:20,
    },
    button3: {
      backgroundColor:"#9bcca5",
      fontSize:36,
      fontFamily:'OleoScript-Regular',
      alignItems: 'center',
      justifyContent: 'center',
      width:316,
      height:91,
      //flexDirection: "centr",
      marginTop:25,
      marginLeft:30,
      marginRight:50,
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius:20,
    },

    logo:{
      width:58,
      height:62,
      marginLeft:225,
      marginTop:50,
    },
    login:{
      backgroundColor:"#ffffff",
    },
    loginbutton:{
      color:"#000000",
      fontFamily:'JosefinSans-SemiBold',
      fontSize:22,
      height:45,
      width:100,
      left:310,
    },
    
  })
