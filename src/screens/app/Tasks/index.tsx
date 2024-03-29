import { View, Text, SafeAreaView, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import Header from '../../../components/Header'
import PlusIcon from '../../../components/PlusIcon'
import Title from '../../../components/Title'
import Input from '../../../components/Input'
import { useDispatch, useSelector } from 'react-redux'
import Checkbox from '../../../components/Checkbox'
import Categories from '../../../components/Categories'
import { categories } from '../../../constants/categories'
import firestore from '@react-native-firebase/firestore';
import { setToUpdate } from '../../../store/tasks'

const Tasks = () => {

  const tasks = useSelector(state => state.tasks.data);
  const [category,setCategory] = useState('all');
  const [filteredTasks, setFilteredTasks] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Tasks from Redux state:', tasks);
    if(category && category != 'all'){
      const filtered = tasks?.filter(task => task?.category === category);
      setFilteredTasks(filtered);
    }else{
      setFilteredTasks(tasks);
    }
  }, [category,tasks]);

  const onTaskUpdate = (item) => {
    firestore()
    .collection('Tasks')
    .doc(item?.uid)
    .update({
      checked : !item.checked,
    })
    .then(() => {
      dispatch(setToUpdate());
    });
  };

  const renderTask = ({ item }) => {
    console.log('Rendering task:', item);
    return (
      <View style={styles.row}>
        <Checkbox checked={item.checked} onPress={() => onTaskUpdate(item)} />
        <Text style={[styles.taskText, item?.checked ? styles.checked : {}]}>{item.title}</Text>
      </View>
    );
  };

  console.log('Tasks component rendered.');

  return (
    <SafeAreaView style={styles.container}>
      <Header title='Tasks' />
      <FlatList 
        ListHeaderComponent={
          <View style={{marginBottom:24}}>
            <Title type="thin">To Do Tasks</Title>
            <Categories 
              categories={[{label:'All' , value:'all'},...categories]} 
              selectedCategory={category} 
              onCategoryPress={setCategory}
            />
          </View>
      }
        data={filteredTasks} 
        renderItem={renderTask}
        keyExtractor={item => String(item?.uid)}
      />
      <PlusIcon />
    </SafeAreaView>
  );
}

export default Tasks;