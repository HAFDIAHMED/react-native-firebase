import React from 'react';
import { Button, StyleSheet, Text, View,TextInput } from 'react-native';


function   CRUD(props) {
    return (
        <View style={styles.container}>
                <Text style={StyleSheet.titre}>CRUD</Text>
                <View style={styles.inputs}>
                <TextInput  placeholder="Type here to title!" />
                   
                    <TextInput  placeholder="Type here age!" />
                    <Button
                    title="create"


                    />
                </View>
        </View>
    );
}

export default CRUD;
const styles = StyleSheet.create({
    container : {

        flex : 1,
        justifyContent : 'center',
       
    },
    
    inputs : {
        
        borderColor :"green",
        borderWidth : 1,
        paddingVertical : 80,
       
        alignItems : 'center',
        flexDirection : 'column',

    },
})