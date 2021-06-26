import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import  AsyncStorage  from '@react-native-async-storage/async-storage' 
import Notes from './Notes'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useState, useEffect } from 'react'

//Styles 
const styles = StyleSheet.create({
    editIcon:{
        marginRight:30, 
    }
})

interface note{
    id: number,
    title: string,
    text: string,
}

interface noteGetter{
    (): Array<note>;
}

const Home = ({navigation} : {navigation : any}) => {
    const [notes, setNotes] = useState<Array<note> >();


    const storeNotes = async (value : Array<note>) =>{
        try {
            const valueJSON = JSON.stringify(value);
            await AsyncStorage.setItem('@Notes', valueJSON);
        } catch (error) {
            console.log(error);
        }
    } 
    storeNotes([{id: 2, title: "first", text:"idk"}])
    
    const getNotes = async () => {

        try {
            const jsonValue = await AsyncStorage.getItem('@Notes');
            console.log(jsonValue);       
            return jsonValue != null ? JSON.parse(jsonValue) : null; 
        } catch (error) {
            console.log(error);
        }
    }
    
    const deleteNote = async (id : number) => {
        try {
            const request = await getNotes();
            const newNotes = request.filter((item: note) =>{
                item.id !== id;
            }) ;
            storeNotes(newNotes)
        } catch (error) {
            console.log(error)
        }
    }  
    useEffect(()=>{
        getNotes().then(data =>{
            setNotes(data);
            console.log(data);
        })
    },[])
    console.log(notes);
    React.useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: ()=>(
                <Icon style={styles.editIcon} onPress={() =>{
                    // navigation.navigate('Note',  {
                    //     id: 5,
                    //     note: {
                    //         id: 3, 
                    //         title: 'New Title 24',
                    //         text: 'Insert New text'
                    //     },
                    // });
                    
                }} name="edit" size={30} color="#FFF"/>
            ),
        })
    })
    return (
        <ScrollView>
            <Notes navigation={navigation} />
        </ScrollView>
    )
}

export default Home
