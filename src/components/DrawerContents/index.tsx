import React from 'react';
import { Linking, StyleSheet, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import {
    DrawerContentScrollView,
    DrawerItemList,
  } from '@react-navigation/drawer';
import { PRIVACY_POLICY_LINK, TERMS_CONDITIONS_LINK } from '../../constants/links';

  
  function DrawerContents(props) {

    const {navigation} = props;

    const logout = () => {
      auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  }

    return (
      <DrawerContentScrollView {...props}>
        <Text style={styles.link} onPress={() => navigation.navigate('Home')}>Home</Text>
        <Text style={styles.link} onPress={() => navigation.navigate('Tasks')}>Tasks</Text>
        <Text style={styles.link} onPress={() => Linking.openURL(PRIVACY_POLICY_LINK)}>Privacy Policy</Text>
        <Text style={styles.link} onPress={() => Linking.openURL(TERMS_CONDITIONS_LINK)}>Terms and Conditions</Text>
        <Text style={styles.link} onPress={logout}>Log out</Text>
      </DrawerContentScrollView>
    );
  }

const styles = StyleSheet.create({
  link:{
    color:'#000000',
    fontSize:13,
    fontWeight:'500',
    margin:8,
    marginHorizontal:16,
  },
});

export default React.memo(DrawerContents);