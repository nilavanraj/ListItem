import React from 'react';
import { View, SafeAreaView, StyleSheet,Button,TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';

import {Box,InputBox,Text} from "./common"

import colors from "../components/assets/colors.json";
import {close} from "./assets/svg"

// import Text from "./Text"

const styles = StyleSheet.create({
  welcome:{
  // fontFamily:"Inter",
    fontWeight:"500",
    fontSize:14,
    color:"#6B6C70",
   // letterSpacing: "3%",
    paddingTop:20
  },
  loginTest:{
    fontWeight:"600",
    fontSize:18,
    color:"#FFFFFF"
  },
  inputContinerEmail:{
    width:"95%",
    paddingTop:40,
  },
  inputContinerPassword:{
    width:"95%",
  },
  inputLable: {
    fontWeight:"600",
    fontSize:14,
    color:"#C5C7CA"
  },
  inputLableForgot:{
    fontWeight:"600",
    fontSize:12,
    color:"#C5C7CA"
  }, 
  passNForgot:{
    flexDirection:"row",
    justifyContent: 'space-between'     
  },
  button:{
    width:"90%",
  },
  touchableRegister:{
    fontWeight:"400",
    fontSize:14,
    color:"#ffff"
  },
  notRegistered:{
    flexDirection:"row",
    width:"90%",
    paddingTop:15,
    paddingBottom:30
  },
  close:{
    position:"absolute",
    right:10,
    top: 10,
    width:32,
    height:32,
    borderRadius:32/2,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:colors.DarkBoxBackground,
    marginHorizontal:10
  },
});

const Login = ({onPressClose,conform,register}) => {
  const [text, onChangeText] = React.useState('');

  return (
      <Box gradient>
        <Text style={styles.welcome}> WELCOME BACK </Text>
        <Text style={styles.loginTest}> Log into your account </Text>

        <TouchableOpacity onPress={onPressClose} style={styles.close}>
          <SvgXml xml={close} width="50%" height="50%" />
        </TouchableOpacity>

        {/*  Email  */}
        <View style={styles.inputContinerEmail}>
          <Text style={styles.inputLable}>Email or Username </Text>
          <InputBox placeholder="Enter your email" onChangeText={onChangeText}  />
        </View>

        {/*  Password  */}
        <View style={styles.inputContinerPassword}>
          <View style={styles.passNForgot}>
            <Text style={styles.inputLable}> Password </Text>
            <Text style={styles.inputLableForgot}>Forgot password?</Text>
          </View>
            <InputBox placeholder="Enter your Password" onChangeText={onChangeText}  />
        </View>

      {/*  Button  */}
      <View style={styles.button}>
        <Button
          onPress={conform}
          title="Login now"
          color="#4A96FF"
        />
      </View>
      <View style={styles.notRegistered}>
        <Text style={styles.inputLable}> Not registered yet?  </Text>
        <TouchableOpacity onPress={register}>
        <Text style={styles.touchableRegister}> Register → </Text>
        </TouchableOpacity>
      </View>
      </Box>
  );
};


export default Login;