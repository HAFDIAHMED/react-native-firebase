import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Store(props) {
    return (
        <View style={styles.container}> 
        <Text> Store </Text>
        </View>
        
    );
}

export default Store;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
        

    },
    
})