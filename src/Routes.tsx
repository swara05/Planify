import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import auth from '@react-native-firebase/auth';
import Onboarding from './screens/auth/Onboarding';
import Signin from './screens/auth/Signin';
import Signup from './screens/auth/Signup';
import Home from './screens/app/Home';
import Tasks from './screens/app/Tasks';
import AddTask from './screens/app/AddTask';
import DrawerContents from './components/DrawerContents';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../Planify/src/store/user'; // Update the import path according to your folder structure
import colors from './constants/colors';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Routes = () => {

  const dispatch = useDispatch()
  const user = useSelector(state => state.user.data);
    // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);   

  console.log('user :>>', user)
  // Handle user state changes
  function onAuthStateChanged(user) {
    dispatch(setUser(user));
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
  
  const Tabs = () => (
    <Tab.Navigator screenOptions={{tabBarShowLabel: false , headerShown: false}}>
        <Tab.Screen name="Home" component={Home} options={{ 
          tabBarIcon: ({ focused }) => (
          <Image 
            style={styles.icons} 
            source={focused 
              ? require('../../Planify/src/assets/homeFill.png')
              : require('../../Planify/src/assets/home.png')
            } 
          />
        )}} />
        <Tab.Screen name="Tasks" component={Tasks} options={{ 
          tabBarIcon: ({ focused }) => (
          <Image 
            style={styles.icons} 
            source={focused 
              ? require('../../Planify/src/assets/task.png') 
              : require('../../Planify/src/assets/checklist.png')
            } 
          />
        )}} />
  </Tab.Navigator>
  )

  if(user) {
    return(
        <Drawer.Navigator drawerContent={(props) => <DrawerContents {...props} />} screenOptions={{headerShown:false}}>
            <Drawer.Screen name="Tabs" component={Tabs} />
            <Drawer.Screen name="AddTask" component={AddTask} />
        </Drawer.Navigator>
    )
  }

  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="Signin" component={Signin} />
          <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  icons:{
    width:24,
    height:24,
    tintColor : colors.purple,
  }
});

export default React.memo(Routes);
