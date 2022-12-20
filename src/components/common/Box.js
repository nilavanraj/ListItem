import React from 'react';
import {Text,View, SafeAreaView, StyleSheet, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from "../assets/colors.json";
 const common = {
    alignItems:"center",
    justifyContent:"center",
    borderRadius:8,
    marginVertical:4
  }
const styles = StyleSheet.create({
  linearGradient:{
    padding: 2,
    ...common,
    marginVertical:0

  },
  box:{
    width:"100%",
    backgroundColor:colors.BoxBackground,
    ...common,
  },
  nonGradientBox:{
    paddingVertical:10,
    width:"99%",
    paddingHorizontal:10,
    alignSelf:"center",
    backgroundColor:colors.BoxBackground,
    borderColor:colors.BoxBorder,
    borderWidth:2,
    ...common,
  },
  dark:{
    paddingVertical:10,
    width:"100%",
    backgroundColor:colors.DarkBoxBackground,
    alignItems:"center",
    justifyContent:"center",
    ...common,

  }
});

const Box = ({children,gradient,dark=false }) => {
  
  if(gradient)
    return (
      <LinearGradient
          colors={[colors.LinearGradientC1, colors.LinearGradientC2]}
          start={{ x: 0.0, y: 0.0 }} 
          end={{ x: 1.0, y: 1.0 }}
          style={styles.linearGradient} 
  >
      <View style={styles.box}>
        {children}
      </View>

    </LinearGradient>
    );

if(dark)
return (
      <View style={styles.dark}>
        {children}
      </View>
    );

 return (
      <View style={styles.nonGradientBox}>
        {children}
      </View>
    );
};


export default Box;