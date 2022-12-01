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

  export default function Login({navigation})
  {


    return (

      
        <View
            style={styles.container}
        >
            <Image style={styles.login_logo}  source = {require('../../assets/Login.png')}/>
            
          <View style={styles.inner}>
            <Text style={styles.text}>
                Login to your Account
            </Text>
            <View style={styles.innerinner}>
                <Text style={styles.textmail}>
                    Email:
                </Text>
                <TextInput
                style={styles.input}
                />
                <Text style={styles.textmail}>
                    Password:
                </Text>
                <TextInput
                style={styles.input}
                />
                <Text style={styles.forget}>
                    Forget Password
                </Text>
                <Pressable style={styles.button} >
                    
                    <Text style={styles.stylebutton}>Login</Text>
                </Pressable>
                <Text style={styles.textnew}>
                    New User? Sign up
                </Text>
            </View>
          </View>
       </View>

    )
  }

  const styles = StyleSheet.create({
    
    container:{
      flex:1,
      backgroundColor:"#9BCCA5",
    },
    inner:{
        backgroundColor:"#D9D9D9",
        height:568,
        width:'100%',
        borderRadius:40,
        top:250,
    },
    innerinner:{
        backgroundColor:'#ffffff',
        height:514,
        top:30,
        width:'100%',
        borderRadius:40,

    },
    text:{
        fontSize:28,
        color:'#000000',
        fontFamily:'JosefinSans-SemiBold',
        textAlign:'center',
        top:10,
    },
    login_logo:{
        width: 677,
        height: 469,
        left: -158,
        top: -83,
        marginBottom:-450,
        alignItems:'center',
        
    },
    textmail:{
        fontFamily:'JosefinSans-SemiBold',
        color:'#000000',
        top:30,
        left:40,
        fontSize:25,
        padding:15,
    },
    input:{
        top:30,
        borderColor:'#9BCCA5',
        borderWidth:1,
        borderRadius:15,
        width:'70%',
        left:55,
    },
    forget:{
        fontFamily:'JosefinSans-SemiBold',
        color:'#000000',
        left:60,
        top:35,
        fontSize:15,
    },
    button:{
        backgroundColor:"#9BCCA5",
        borderRadius:15,
        top:65,
        width: 146,
        height: 48,
        left: 120,
        alignItems:'center',

    },
    stylebutton:{
        fontFamily:'JosefinSans-SemiBold',
        fontSize:20,
        color:'#000000',
        textAlign:'center',
        top:9,
    },
    textnew:{
        color:'#000000',
        textAlign:'center',
        top:70,
        fontFamily:'JosefinSans-SemiBold',
        textAlign:'center',
    }

    
     
  })
