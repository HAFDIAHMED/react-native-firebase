// screens/UserScreen.js

import React, { Component } from 'react';
import { Button,StyleSheet ,View, Text,ScrollView, ActivityIndicator } from 'react-native';
import { ListItem } from 'react-native-elements';
import firebase  from "firebase/app";
import "firebase/firestore";

class UserScreen extends Component {
  constructor (){
    super();
    this.firestoreRef=firebase.firestore().collection('users');
    this.state ={
      isLoading : true,
      userArr : []
    }
  }
  componentDidMount (){
    this.unsubscribe=this.firestoreRef.onSnapshot(this.getCollection);
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  getCollection =(querySnapshot)=>{
    const userArr =[];
    querySnapshot.forEach((res)=>
    {
      const{name,email,mobile}=res.data();
      userArr.push({
        key:res.id,
        res,
        name,
        email,
        mobile,
      });
      
    }
    );
    this.setState({
      userArr,
      isLoading : false,
    })
  }
  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }

    
      
    ];
    return (
      <ScrollView style={styles.container}>
          {
            this.state.userArr.map((item,i)=>
            {
              return (

                <ListItem key ={i} bottomDivider
                onPress={()=>{this.props.navigation.navigate('UserDetailScreen',{
                userKey : item.key}
                )}}
                >
                  <ListItem.Content>
                    <ListItem.Title>
                      {item.name}
                    </ListItem.Title>
                    <ListItem.Subtitle>
                      {item.email}
                    </ListItem.Subtitle>
                  </ListItem.Content>
                  

                </ListItem>

              );
            
            }
            
            )}

        
    </ScrollView>
    );
  }
}

export default UserScreen;
const styles = StyleSheet.create({
  
  container:{
    flex: 1, 
    paddingBottom: 22,
  
   

  },
})