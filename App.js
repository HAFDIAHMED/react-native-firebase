import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/home';
import Profile from './components/profile';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from './components/settings';


export default function App() {
  const Stack = createStackNavigator();
  function MyStacks () {
    return (
      <Stack.Navigator>
      <Stack.Screen  name="Home" component={Home}/>
      <Stack.Screen  name="Profile" component={Profile}/>
      <Stack.Screen name ="Settings" component={SettingsScreen}/>

    </Stack.Navigator>

    );

  }

  return (
    /*  <NavigationContainer>
      <MyStacks/>
    </NavigationContainer>*/
    <View style={styles.container}>
      <Text>hello</Text>
    </View>
   
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
