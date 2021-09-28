import React, {useState} from 'react';
import { Button, StyleSheet, Text, View,TextInput } from 'react-native';


function   CRUD(props) {
    const  [name,setName]=useState("ahmed");
    const  [age,setAge]=useState(23);
    const clickhandeler=()=>{
        setName("samir");

    }
    
    const [person , setPerson ]=useState({name :'hamid',age :23})
    const ChangePerson =()=>{
        setPerson ({name :"samira",age: 24})
    }
    const [conter,setCounter]=useState(1);
    const compteur=()=>{
        setCounter(conter);
        conter++;
       
    }
    return (
        <View style={styles.container}>
                <Text style={StyleSheet.titre}>CRUD</Text>
               
                <Text>Enter Name:</Text>
               
                <TextInput style={styles.txtinput}
                multiline
                 placeholder ="Name"
                 onChangeText={(value)=>setName(value)}
                />
                <TextInput style={styles.txtinput}
                 placeholder ="Age"
                 onChangeText={(value)=>setAge(value)}
                />
                <Text>name : {name}</Text>
                <Text>name : {age}</Text>
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
    
  
   
    txtinput : {
        borderWidth :1,
        borderColor : "#777",
        padding : 8,
        margin : 10,
        width : 200,
    },
})