// index.tsx
import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './styles';
import Button from '../../../components/Button';

const Onboarding = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Image and Footer View */}
      <View>
        <Image resizeMode='cover' source={require('../../../assets/tasks.jpg')} style={styles.image} />
        <View style={styles.footer} />
      </View>

      {/* Content View */}
      <View style={styles.content}>
        <Text style={styles.title}>Best task management app</Text>
        <Text style={styles.subtitle}>
          Get organized by sorting out all your tasks and boost your productivity.
        </Text>

        <Button onPress={() => navigation.navigate('Signin')}>Log in</Button>
        <Button onPress={() => navigation.navigate('Signup')} type='blue'>Get started</Button>
      </View>
    </View>
  );
};

export default Onboarding;
