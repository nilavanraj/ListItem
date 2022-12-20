import React from 'react';
import {Text,View, SafeAreaView, StyleSheet, TextInput,Button,TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Box from "./Box"
import colors from "../assets/colors.json";

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginHorizontal:0,
    margin: 12,
    borderWidth: 1,
    borderColor:colors.BoxBorder,
    borderRadius:5,
    color:colors.InputC1,
    paddingLeft:20
  }
});

const InputBox = ({onChangeText,placeholder}) => {
  return (
    <TextInput 
      placeholderTextColor ={colors.InputC1}
      placeholder={placeholder}
      style={styles.input}
      onChangeText={onChangeText}  />
  );
};


export default InputBox;