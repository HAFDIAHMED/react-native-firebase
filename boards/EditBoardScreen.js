import React from 'react';
import { Button,StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';

function EditBoardScreen(props) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}> 
        <Text>Edit Board</Text>
        <Button 
        title="Go to Edit Board ..again"
        onPress={()=>navigation.navigate("EditBoardScreen")}

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

export default EditBoardScreen;
const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
})