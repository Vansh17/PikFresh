import React from "react";
import {
    Pressable,
    Text,
    StyleSheet,
} from 'react-native';

const VanshButton =(props)=>{
    return(
        <Pressable
            onPress={props.onPressFunction}
            hitSlop={{top:10,bottom:10,right:10,left:10}}
            android_ripple={{color:'#00f'}}
            style={({pressed})=>[
                {backgroundColor:pressed ? '#dddddd' : props.color},
                styles.button,
                {...props.style}
            ]}
        
        >
      <Text style={styles.text}>
        {props.title}
      </Text>
    </Pressable>
    )
}

const styles = StyleSheet.create({
    body:{
        // flexDirection:'column-reverse',
        // width:'100%',
        // height:'50%',
        // backgroundColor:'green',
        flex:1,
        // borderWidth:10,
        // borderColor:'white',
        // borderRadius:10,
        alignItems:'center',
        // justifyContent:'center',
      },
      text:{
        color:'#000000',
        fontSize:20,
        fontStyle:'italic',
        margin:10,
        textAlign:'center',
        // textTransform:'uppercase',
      },
      input:{
        width:200,
        borderWidth:1,
        borderColor:'#555',
        borderRadius:5,
        textAlign:'center',
        fontSize:20,
      },
})

export default VanshButton