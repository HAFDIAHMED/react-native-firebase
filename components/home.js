import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';


function Home(props) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Button 
            title="go to profile"
            color ="blue"
            onPress= {()=>navigation.navigate('Profile')}
            />
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent : 'center',
        alignItems: 'center',

    },
})