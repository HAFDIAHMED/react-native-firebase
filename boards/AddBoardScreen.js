import React from 'react';
import { Button,StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';



function AddBoardScreen(props) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}> 
        <Text>Add Board</Text>
        <Button 
        title="Go to Add Board ..again"
        onPress={()=>navigation.navigate("AddBoardScreen")}

        />
        <Button 
        title="Go to Home"
        onPress={()=>navigation.navigate("BoardScreen")}
        
        />
        <Button 
        title="Go back"
        onPress={()=>navigation.goBack()}
        
        />
    </View>
    );
}

export default AddBoardScreen;
const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
})