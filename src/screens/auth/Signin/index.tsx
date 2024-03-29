// index.tsx
import { View, Text, Image, SafeAreaView, Alert } from 'react-native';
import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import styles from './styles';
import Button from '../../../components/Button';
import Title from '../../../components/Title';
import Input from '../../../components/Input';

const Signin = ({navigation}) => {
  const [values, setValues] = useState({});
  
  const onChange = (value , key) => {
    setValues((vals) => ({
      ...vals,
      [key]:value,
    }))
  }

  const onSubmit = () => {
  auth()
   .signInWithEmailAndPassword(
    values.email, values.password
   )
    .then(() => {
      console.log('User signed in!');
    })
    .catch(error => {
      console.log('error :>>', error.message)
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('That email address is already in use!');
      } else if (error.code === 'auth/invalid-email') {
        Alert.alert('That email address is invalid!');
      } else{
        Alert.alert(error.message);
      }
    });
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <Title>Welcome back!</Title>

      <Input placeholder='Email' keyboardType='email-address' onChangeText={(val) => onChange(val, 'email')}/>
      <Input placeholder='Password' secureTextEntry onChangeText={(val) => onChange(val, 'password')}/>
      
      <Button onPress={onSubmit}>Login</Button>

        <Text style={styles.footerText}>Not registered?
         <Text onPress={() => navigation.navigate('Signup')}  style={styles.footerLink}> Sign up!</Text>
        </Text>
    </SafeAreaView>
  );
};

export default Signin;
