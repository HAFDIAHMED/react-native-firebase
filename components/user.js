import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


function User(props) {
    return (
        <View style={styles.usercontainer}> 
        <View style={styles.userwrapper}>
        <Text style = {styles.titletext}> User's Info</Text>

        <Text  style={styles.usertext}>Hello {props.text}</Text>

        </View>
            
        </View>
        
    );
}

export default User;
const styles = StyleSheet.create({
    usercontainer : {
        flex : 1,
        backgroundColor : "#E8EAED",
        width : '100%'


    },
    userwrapper : {
        paddingTop:80,
        paddingHorizontal : 20,
    },
  
    titletext : {
        fontSize : 18,
        fontWeight : 'bold',

    },
    usertext : {
        alignItems: 'center',
        justifyContent: 'center',

    },
  

    
})