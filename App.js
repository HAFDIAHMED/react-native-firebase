import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/home';
import Profile from './components/profile';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from './components/settings';
import Store from './components/store';
import Chat from './components/chat';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


export default function App() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
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
              name ="settings" 
              color={color} size ={size}
              />
            ),
          }}
          />

        </Tab.Navigator>
    
    );
    
  }

  return (
    /*  <NavigationContainer>
      <MyStacks/>
    </NavigationContainer>*/
       <NavigationContainer>
      <MyTabsButton/>
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
