import { View, Text, SafeAreaView, Pressable, Image, Alert, ActivityIndicator, ScrollView } from 'react-native'
import React, { useState } from 'react'
import firestore from '@react-native-firebase/firestore';
import styles from './styles'
import Title from '../../../components/Title'
import Input from '../../../components/Input'
import Categories from '../../../components/Categories'
import { categories } from '../../../constants/categories'
import DateInput from '../../../components/DateInput'
import Button from '../../../components/Button'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux';
import { setToUpdate } from '../../../store/tasks';

const AddTask = ({navigation}) => {
  const user = useSelector(state => state.user.data);
  const dispatch = useDispatch();
  const [category, setCategory] = useState();
  const [deadline, setDeadline] = useState(new Date());
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    const today = moment(new Date()).format('YYYY-MM-DD');
    const deadlineFormatted = moment(deadline).format('YYYY-MM-DD');
    
    if(!title){
      Alert.alert('Please enter the task title');
      return;
    }

    if(moment(deadlineFormatted).isBefore(today)){
      Alert.alert('Please enter the future date');
      return;
    }
  setLoading(true);
  firestore()
  .collection('Tasks')
  .add({
    title,
    deadline,
    category,
    checked: false,
    userId: user?.uid
  })
  .then(() => {
    setLoading(false);
    dispatch(setToUpdate());
    navigation.navigate('Tasks');
    console.log('Task added!');
    setTitle('');
    setDeadline(new Date());
    setCategory(null);
  }).catch(e => {
    console.log('error when adding task :>>', e);
    setLoading(false);
    Alert.alert(e.message);
  });

  }

  const handleBack = () => {
    navigation.goBack()
  }

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.backContainer} onPress={handleBack} hitSlop={8}>
        <Image style={styles.icon} source={require('../../../assets/back.png')} />
      </Pressable>

      <ScrollView>
        <Title type="thin">Add New Task</Title>

        <Text style={styles.label}>Describe the task</Text>
        <Input value={title} onChangeText={setTitle} outlined placeholder="Type here..." />

        <Text style={styles.label}>Type</Text>
        <Categories categories={categories} selectedCategory={category} onCategoryPress={setCategory}/>

        <Text style={styles.label}>Deadline</Text>
        <DateInput value={deadline} onChange={setDeadline}/>

        {loading ? (
          <ActivityIndicator />
        ) : (
          <Button onPress={onSubmit} type="blue" style={styles.button}>Add the Task</Button>
        )}

      </ScrollView>

    </SafeAreaView>
  )
}

export default AddTask