import React, { Component } from 'react';
import { Button, StyleSheet, TextInput, ScrollView, ActivityIndicator, View } from 'react-native';
import firebase  from "firebase/app";
import "firebase/firestore";

class AddUserScreen extends Component {
  constructor (){
    super();
    this.dbRef=firebase.firestore().collection('users');/*connection to DB */
    this.state={
      name:'',
      email :'',
      mobile : '',
      isLoading : false
      /*this.state takes a column of data  from the db  */
    };
  }
   
  inputValueUpdate =(val,prop)=>{
    const state = this.state;
    state[prop]=val;
    this.setState(state);
    /*affecting the value inputed to this.state(column of data) */
  }

  storeUser () {
    if(this.state.name===''){
      alert("name is empty fill it !")
    } else {
      this.setState(
        {
          isLoading:true,

        }
      );
      this.dbRef.add({
        name : this.state.name,
        email : this.state.email,
        mobile: this.state.mobile,
      }).then((res)=>
      {
        this.setState({
          name :'',
          email : '',
          mobile :'',
          isLoading : false,
        });
        this.props.navigation.navigate('UserScreen')
      }
      ).catch((err)=>{
        console.error("error found : ", err);
        this.setState({
          isLoading : false
        });

      }
      );
    }
  }
  

  render() {
    if (this.state.isLoading){
      return (
          <View style={styles.preloader}>
            <ActivityIndicator
            size="large" color ="#9E9E9E"
            />

          </View>
      )
    }
   
    return (
      <ScrollView style={styles.container}>
       <View style={styles.inputgroup}>
         {/*name */}
         <TextInput 
         multiline={true}
          placeholder={'Name'}
          value={this.state.name}
          onChangeText={(val)=>this.inputValueUpdate(val , 'name')}

         />

       </View>
       <View style={styles.inputgroup}>
         {/*email */}
         <TextInput
          placeholder={'Email'}
          value={this.state.email}
          onChangeText={(val)=>this.inputValueUpdate(val , 'email')}
         />
       </View>
       <View style={styles.inputgroup}>
         <TextInput 
         placeholder={"Mobile"}
         value={this.state.mobile}
         onChangeText={(val)=>this.inputValueUpdate(val , 'mobile')}
         />
       </View>
      
       <View  style={{flex:1,}}>
         <Button
          title="Add User"
          color ='green'
          onPress={()=>this.storeUser()}
         />
         <Button
          title="List Users"
          onPress={()=>this.props.navigation.navigate("UserScreen")}
         />
       </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
   inputgroup:{
     flex :1,
     marginBottom : 15,  
     borderBottomWidth : 1,
     borderBottomColor : '#cccccc',
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