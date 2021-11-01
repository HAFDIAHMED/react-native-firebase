import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, StyleSheet,SafeAreaView, Text, View, Modal } from 'react-native';
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
import { TapGestureHandler, TextInput } from 'react-native-gesture-handler';
import {useState,useEffect} from 'react';
import AddUserScreen from './screens/AddUserScreen';
import UserScreen from './screens/UserScreen';
import UserDetailScreen from './screens/UserDetailScreen';



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
  
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
   function MyUsers (){

    return (
      <TabTop.Navigator style={{marginTop : 40}}>
        <TabTop.Screen name ="Add User" component={AddUserScreen}/>
        <TabTop.Screen name ="Users" component={UserScreen}/>
        <TabTop.Screen name ="User DetailS" component={UserDetailScreen}/>
      </TabTop.Navigator>
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
      <MyUsers/>
    </NavigationContainer>
    /*<View style={styles.container}>
      {
        DATA.map((item)=>
        {
          return (
            <View key={item.key} >  
              <Text>{item.title}</Text>
            </View>
          );
        }
        )
      }

    </View> */
    
   
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    justifyContent : 'center',
    alignItems: 'center',

  },
  
});