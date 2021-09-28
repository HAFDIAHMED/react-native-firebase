import React, {useState} from 'react';
import { Button, StyleSheet, Text, View,TextInput } from 'react-native';


function   CRUD(props) {
    const  [name,setName]=useState("ahmed");
    const clickhandeler=()=>{
        setName("samir");

    }
    
    const [person , setPerson ]=useState({name :'hamid',age :23})
    const ChangePerson =()=>{
        setPerson ({name :"samira",age: 24})
    }
    return (
        <View style={styles.container}>
                <Text style={StyleSheet.titre}>CRUD</Text>
                {/*<View style={styles.inputs}>
                <TextInput  placeholder="Type here to title!" />
                   
                    <TextInput  placeholder="Type here age!" />
                    <View style={styles.btncontainer}>
                    <Button
                    title="create"/>
                    </View>
                 

                </View> */}
                <Text>My name is {person.name}</Text>
                <Text> my age is {person.age}</Text>
                <View style={styles.statebtn}>
                    <Button
                     title ="update person"
                     onPress ={ChangePerson}
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
        alignItems : 'center'
       
    },
    statebtn : {
        marginTop : 20,

    },
    
    inputs : {
        
        borderColor :"green",
        borderWidth : 1,
        paddingVertical : 80,
       
        alignItems : 'center',
        flexDirection : 'column',

    },
    btncontainer : {
        marginTop : 40,
    },
})