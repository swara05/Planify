import { View, Text, TextInput, } from 'react-native'
import React from 'react'
import styles from './styles'
import colors from '../../constants/colors';

const Input = ({ outlined,...props }) => {
  return (
    <TextInput 
      placeholderTextColor={colors.midGrey} 
      style={[styles.input , outlined ? styles.outlined : {}]} 
      {...props} 
    />
  );
};

export default Input;
