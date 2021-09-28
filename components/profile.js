import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';


function Profile(props) {
    const navigation = useNavigation();
;
    return (
        <View style={styles.container}>
         <Button
         title="go to settings"
         onPress={()=>navigation.navigate("Settings")}
         />
         <Button 
        title="go to back"
        onPress = {()=> navigation.goBack()}
        />
    </View>
    );
}

export default Profile;
const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent : "center",
        alignItems : "center"
    },
})