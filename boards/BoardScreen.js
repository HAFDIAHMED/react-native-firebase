import React from 'react';
import { Button,StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { NavigationContainer } from '@react-navigation/native';

function BoardScreen(props) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}> 
            <Text>Board List</Text>
            <Button 
            title="Go to Details"
            onPress={()=>navigation.navigate("BoardDetailScreen")}

            />
            <Button 
            title="Go to Add Board"
            onPress={()=>navigation.navigate("AddBoardScreen")}
            
            />
            <Button 
            title="Go to Edit Board"
            onPress={()=>navigation.navigate("EditBoardScreen")}
            
            />
        </View>
    );
}

export default BoardScreen;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
})