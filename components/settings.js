import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

function SettingsScreen(props) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Button
            title="go back"
            onPress = {()=>navigation.goBack()}
            />
        </View>
        
    );
}

export default SettingsScreen;
const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent : "center",
        alignItems : "center",
    },

    
})