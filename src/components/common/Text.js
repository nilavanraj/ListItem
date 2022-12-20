import React from 'react';
import {Text,View, SafeAreaView, StyleSheet,Button,TouchableOpacity } from 'react-native';


const styles = StyleSheet.create({
  inputLable:{
    fontWeight:"600",
    color:"#C5C7CA"
  },
});

const Login = ({children,font=16,color="#C5C7CA",fade,style}) => {

  return (
        <Text style={[styles.inputLable,style,{fontSize:font},{color:color}]}> 
          {children}
        </Text>
  );
};


export default Login;