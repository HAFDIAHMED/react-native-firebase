// screens/UserDetailScreen.js

import React, { Component } from 'react';
import { Alert, Button, StyleSheet, TextInput, ScrollView, ActivityIndicator, View, Text } from 'react-native';
import firebase  from "firebase/app";
import "firebase/firestore";
import { Ionicons } from '@expo/vector-icons';

class UserDetailScreen extends Component {
  constructor (){
    super();
    this.state ={
      name:'',
      email :'',
      mobile :'',
      isloading : true,
    }
  }
  inputValueUpdate =(val,prop)=>{
    const state=this.state;
    state[prop]=val;
    this.setState(state);

  }
  updateUser (){
    this.setState(
      {
        isloading : true,

      }
    );
    const updateDBRef=firebase.firestore().collection('users').doc(this.state.key);
    updateDBRef.set({
      name : this.state.name,
      email : this.state.email,
      mobile : this.state.mobile,
    }).then((docRef)=>{
      this.setState({
        key :'',
        name : '',
        email : '',
        mobile : '',
        isloading : false,

      });
      this.props.navigation.navigate('UserScreen');

    }).catch((error)=>{
      console.error("Error : ",error);
      this.setState({
        isloading : false,
      });
    });
  }
  deleteUser (){
    const dbRef = firebase.firestore().collection('users').doc(this.props.route.params.userKey);
    dbRef.delete().this((res)=>
    {
      console.log('Item removed from database')
      this.props.navigation.navigate('UserScreen');
    }
    )
  }
  openTwoButtonAlert=()=>{
    Alert.alert(
      'Delete User',
      'Are you sure?',
      [
        {text: 'Yes', onPress: () => this.deleteUser()},
        {text: 'No', onPress: () => console.log('No item was removed'), style: 'cancel'},
      ],
      { 
        cancelable: true 
      }
    );
  }
  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }
    return (
      <ScrollView style={styles.container}>
        <View style={styles.input_container}>
          <View  style={styles.title_container}>
            <Ionicons name="person-circle" size={30} color="blue" />
          <Text style={styles.title}> USER DETAILS</Text>
          </View>
        <View style={styles.inputs}>
          
          <TextInput
          placeholder={"Name"}
          value={this.state.name}
          onChangeText={(val)=>this.inputValueUpdate(val, 'name')}
          />
        </View>
        <View style={styles.inputs}>
          <TextInput
          placeholder={"Email"}
          value={this.state.email}
          onChangeText={(val)=>this.inputValueUpdate(val, 'email')}
          />
        </View>
        <View style={styles.inputs}>
          <TextInput
          placeholder={"Mobile"}
          value={this.state.mobile}
          onChangeText={(val)=>this.inputValueUpdate(val, 'mobile')}
          />
        </View>
        </View>
        <View style={styles.buttons}>
          <Button
          title ="Update User"
          color="green"
          onPress ={()=>this.updateUser()}

          />
           <Button
          title="Delete User"
          color="red"
          onPress ={()=>this.openTwoButtonAlert()}
          />


        </View>
       
       

    </ScrollView>
    );
  }
}

export default UserDetailScreen;
const styles = StyleSheet.create({
  container : {
    flex: 1,
    padding: 22,

  },
  inputs :{
    flex :1,
    marginBottom : 15,  
    borderBottomWidth : 1,
    //borderBottomColor : '#cccccc',
    borderWidth:1,
    margin : 10,
    borderRadius:20,
    padding:10,
    flexDirection: 'row',
  },
  buttons : {
   flex : 1,
   flexDirection : 'row',
   justifyContent : 'space-evenly',

   
   

  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input_container : {
    borderWidth:1,
    marginBottom:20,
    borderColor:'#cccccc',
    borderRadius:20,
    paddingBottom:30,
  },
  title : {
    alignSelf:'center',
    fontSize:20,
    fontWeight:'bold',
  },
  title_container : {
      flexDirection:'row',
      margin:10,
      alignSelf:'center'
  },

})