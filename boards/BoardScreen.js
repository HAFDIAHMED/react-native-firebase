import React from 'react';
import { Button,StyleSheet,FlatList, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { NavigationContainer } from '@react-navigation/native';
import { Boards } from '../database/firebase';

function BoardScreen(props) {
    const navigation = useNavigation();
    
      
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
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
            {
        DATA.map((item,i)=>
        {
          return (
            <View key={i} >  
              <Text>{item.id}</Text>
              <Text>{item.title}</Text>
            </View>
          );
        }
        )
      }

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