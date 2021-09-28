import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Home from './components/home';
import Profile from './components/profile';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from './components/settings';
import Store from './components/store';
import Chat from './components/chat';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Ionicons } from '@expo/vector-icons';
import CRUD from './components/crud';
import BoardScreen from './boards/BoardScreen';
import BoardDetailScreen from './boards/BoardDetailScreen';
import AddBoardScreen from './boards/AddBoardScreen';
import EditBoardScreen from './boards/EditBoardScreen';
import { TapGestureHandler } from 'react-native-gesture-handler';


export default function App() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const Tap = createBottomTabNavigator();
  const TabTop = createMaterialTopTabNavigator();

  function MyStacks () {
    return (
      <Stack.Navigator>
      <Stack.Screen  name="Home" component={Home}/>
      <Stack.Screen  name="Profile" component={Profile}/>
      <Stack.Screen name ="Settings" component={SettingsScreen}/>

    </Stack.Navigator>

    );
    

  }
  function MyTabsButton () {
    return (
      
        <Tab.Navigator>
          <Tab.Screen name = "Chat" component ={Chat}
          options ={{
            tabBarLabel : "messages",
            tabBarIcon : ({color , size}) =>(
              <Ionicons name ="chatbox" color ={color} size={size}/>
            ),

          }}
          />
          <Tab.Screen name = "Store" component ={Store} 
          options ={{
            tabBarLabel : "Store",
            tabBarIcon : ({color, size })=>(
              <Ionicons name ="list" color ={color} size ={size}/>

            ),

          }}
          />
          <Tab.Screen 
          name="Settings" component={SettingsScreen}
          options ={{
            tabBarLabel: "Settings",
            tabBarIcon : ({color , size})=>(
              <Ionicons
              name ="settings-outline" 
              color={color} size ={size}
              />
            ),
          }}
          />

        </Tab.Navigator>
    
    );
    
  }
  function MyTabsTop (){
    return (
      <NavigationContainer>

<TabTop.Navigator>
        <TabTop.Screen name ="Chat" component={Chat}/>
        <TabTop.Screen name ="Store" component ={Store}/>
      </TabTop.Navigator>
      </NavigationContainer>
     
    );


  }
  function MyBoardButtom (){

    return (
      <Stack.Navigator>
      <Stack.Screen name="BoardScreen" component={BoardScreen}/>
      <Stack.Screen name="BoardDetailScreen" component={BoardDetailScreen}/>
      <Stack.Screen name="AddBoardScreen" component={AddBoardScreen}/>
      <Stack.Screen name="EditBoardScreen" component={EditBoardScreen}/>
      
      

    </Stack.Navigator>
    );
  }
  

  return (
    /*  <NavigationContainer>
      <MyStacks/>
    </NavigationContainer>*/
       /*<NavigationContainer>
      <MyTabsButton/>
    </NavigationContainer> */
     /*<NavigationContainer>
      <MyTabsTop/>
    </NavigationContainer> */

    <NavigationContainer>
      <MyBoardButtom/>
    </NavigationContainer> 
    
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
