import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import Header from '../../../components/Header'
import PlusIcon from '../../../components/PlusIcon'
import Title from '../../../components/Title'
import { useDispatch, useSelector } from 'react-redux'
import firestore from '@react-native-firebase/firestore';
import { setTasks } from '../../../store/tasks'
import StatusCard from '../../../components/StatusCard'
import moment from 'moment'
import { TouchableOpacity } from 'react-native-gesture-handler'

// Import necessary modules/components

const Home = ({ navigation }) => {
  const tasks = useSelector(state => state.tasks.data);
  const user = useSelector(state => state.user.data);
  const toUpdate = useSelector(state => state.tasks.toUpdate);
  const dispatch = useDispatch();
  const [counts, setCounts] = useState({});

  useEffect(() => {
    if (user) {
      const subscriber = firestore()
        .collection('Tasks')
        .where('userId', '==', user.uid)
        .get()
        .then(querySnapshot => {
          console.log('Total tasks: ', querySnapshot.size);
          const tasksList = [];

          querySnapshot.forEach(documentSnapshot => {
            console.log(
              'User ID: ',
              documentSnapshot.id,
              documentSnapshot.data()
            );
            tasksList.push({
              uid: documentSnapshot.id,
              ...(documentSnapshot.data() || {}),
            });
          });
          dispatch(setTasks(tasksList));
        });

      // return () => subscriber(); // Unsubscribe from firestore on component unmount
    }
  }, [user, toUpdate, dispatch]);

  useEffect(() => {
    if (tasks?.length) {
      const highPriority = tasks.filter(
        task => task?.category === 'urgent' || task?.category === 'important'
      );

      const today = moment().format('YYYY-MM-DD');
      const dueDeadline = tasks.filter(task => {
        const deadline = task?.deadline?.toDate(); // Convert Firestore timestamp to Date object
        return moment(deadline).isBefore(today);
      });

      const quickWin = tasks.filter(
        task => task?.category === 'quick_task'
      );

      setCounts({
        highPriority: highPriority.length,
        dueDeadline: dueDeadline.length, // Update the key to match the label in StatusCard
        quickWin: quickWin.length,
      });
    }
  }, [tasks]);

  if (user === null) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Home" />
      <ScrollView>
        <Title type="thin">Daily Tasks:</Title>
        <View style={styles.row}>
          <StatusCard label="High Priority" count={counts?.highPriority} />
          <StatusCard label="Due Deadline" type="error" count={counts?.dueDeadline} />
          <StatusCard label="Quick Win" count={counts?.quickWin} />
        </View>

        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate('Tasks')}>
          <Text style={styles.title}>Check all my tasks</Text>
          <Text style={styles.subtitle}>
            See all tasks and filter them by categories you have selected when creating them
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <PlusIcon />
    </SafeAreaView>
  );
};

export default Home;
