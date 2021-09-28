import React from 'react';
import { Button,StyleSheet, View, Text } from 'react-native';


function BoardDetailScreen(props) {
    return (
        <View style={styles.container}> 
        <Text>Board Details</Text>
        <Button 
        title="Go to Details ..again"
        onPress={()=>navigation.navigate("BoardDetailScreen")}


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

export default BoardDetailScreen;


const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
})