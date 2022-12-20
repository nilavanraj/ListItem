import React from 'react';
import { View, StyleSheet,Button,TouchableOpacity } from 'react-native';
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
  RegisterTest:{
    fontWeight:"600",
    fontSize:18,
    color:"#FFFFFF"
  },
  inputContinerEmail:{
    width:"95%",
    paddingTop:40,
  },
  inputContinerUsername:{
    width:"95%",
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

const Register  = ({onPressClose,conform,register}) => {
  const [text, onChangeText] = React.useState('');

  return (
      <Box gradient>
        <Text style={styles.welcome}> SIGN UP</Text>
        <Text style={styles.RegisterTest}> Create an account to continue </Text>

        <TouchableOpacity onPress={onPressClose} style={styles.close}>
          <SvgXml xml={close} width="50%" height="50%" />
        </TouchableOpacity>

        {/*  Email  */}
        <View style={styles.inputContinerEmail}>
          <Text style={styles.inputLable}>Email </Text>
          <InputBox placeholder="Enter your email" onChangeText={onChangeText}  />
        </View>

        {/* Username */}
        <View style={styles.inputContinerUsername}>
          <Text style={styles.inputLable}>Username </Text>
          <InputBox placeholder="Choose a preferred username
" onChangeText={onChangeText}  />
        </View>

        {/*  Password  */}
        <View style={styles.inputContinerPassword}>
          <View style={styles.passNForgot}>
            <Text style={styles.inputLable}> Password </Text>
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
        <Text style={styles.inputLable}> Already have an account? </Text>
        <TouchableOpacity onPress={register}>
        <Text style={styles.touchableRegister}>  Login → </Text>
        </TouchableOpacity>
      </View>
      </Box>
  );
};


export default Register ;