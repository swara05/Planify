// index.tsx
import { Alert, Linking, SafeAreaView, ScrollView, Text, View } from 'react-native';
import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';

import styles from './styles';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Title from '../../../components/Title';
import Checkbox from '../../../components/Checkbox';
import { PRIVACY_POLICY_LINK, TERMS_CONDITIONS_LINK } from '../../../constants/links';

const Signup = ({navigation}) => {

  const [agreed, setAgreed] = useState(false);
  const [values, setValues] = useState({});

  const onCheckboxPress = () => {
    setAgreed(value => !value);
  };

  const onLinkPress = (url) => {
    Linking.openURL(url)
  };

  const onChange = (value , key) => {
    setValues((vals) => ({
      ...vals,
      [key]:value,
    }))
  }

  console.log('values :>>', values);
  const onSubmit = () => {
   
    if (!values.first_name || !values.last_name) {
      Alert.alert('Please enter first name and last name');
      return;
    }
    
    if (values.password !== values.confirm_password) {
      Alert.alert('Password do not match');
      return;
    }
   
   if (!agreed) {
      Alert.alert('You should agree to the terms');
      return;
    }

    auth()
    .createUserWithEmailAndPassword(
      values.email,
      values.password,
      )
    .then(() => {
      auth().currentUser.updateProfile({
        displayName : `${values.first_name} ${values.last_name}`
    });
      
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('That email address is already in use!');
      }
  
      if (error.code === 'auth/invalid-email') {
        Alert.alert('That email address is invalid!');
      }
  
      console.error(error);
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
          <Title>Join the hub!</Title>

          <Input onChangeText={(val) => onChange(val , 'first_name')} placeholder='First Name'/>
          <Input onChangeText={(val) => onChange(val , 'last_name')} placeholder='Last Name'/>
          <Input onChangeText={(val) => onChange(val , 'email')} placeholder='Email' keyboardType='email-address'/>
          <Input onChangeText={(val) => onChange(val , 'password')} placeholder='Password' secureTextEntry/>
          <Input onChangeText={(val) => onChange(val , 'confirm_password')} placeholder='Confirm Password' secureTextEntry/>

          <View style={styles.row}>
            <Checkbox checked={agreed} onPress={onCheckboxPress} />

            <Text style={styles.agreeText}>I agree to
              <Text style={styles.link} onPress={() => onLinkPress(TERMS_CONDITIONS_LINK)}> Terms and Conditions</Text> and
              <Text style={styles.link} onPress={() => onLinkPress(PRIVACY_POLICY_LINK)}> Privacy Policy</Text>
            </Text>
          </View>

          <Button onPress={onSubmit} type='blue'> Creat new account</Button>


          <Text style={styles.footerText}>Already registered?
            <Text onPress={() => navigation.navigate('Signin')}  style={styles.footerLink}> Sign in!</Text>
          </Text>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
