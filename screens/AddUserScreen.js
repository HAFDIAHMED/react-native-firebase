import React, { Component } from 'react';
import { Button, StyleSheet, TextInput, ScrollView, ActivityIndicator, View } from 'react-native';
import firebase  from "firebase/app";
import "firebase/firestore";

class AddUserScreen extends Component {
  

  render() {
   
    return (
      <ScrollView style={styles.container}>
       <View style={styles.inputgroup}>
         {/*name */}
         <TextInput 
         multiline={true}
          placeholder={'Name'}
         />

       </View>
       <View style={styles.inputgroup}>
         {/*email */}
         <TextInput
          placeholder={'Email'}
         />
       </View>
       <View style={styles.inputgroup}>
         <TextInput 
         placeholder={"Mobile"}
         />
       </View>
      
       <View >
         <Button
          title="Add User"
          color ='green'
         />
       </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35
  },
   inputgroup:{
     flex :1,
     borderBottomWidth : 1,
     borderBottomColor : '#cccccc'
   },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default AddUserScreen;