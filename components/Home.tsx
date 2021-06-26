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

const Home = ({navigation, route   } : {navigation : any, route : any}) => {
    const [notes, setNotes] = useState<Array<note> >([]);
    const note = route.params;
    console.log(note)
    

    const storeNotes = async (value : Array<note>) =>{
        try {
            const valueJSON = JSON.stringify(value);
            await AsyncStorage.setItem('@Notes', valueJSON);
        } catch (error) {
            console.log(error);
        }
    } 
    //storeNotes([{id: 2, title: "first", text:"idk"}])
    
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
        })
        if(note !== undefined){
            console.log(note);
        }

    },[])

    React.useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: ()=>(
                <Icon style={styles.editIcon} onPress={() =>{
                    const newNote : note = {
                        id: notes.length, 
                        title: "New Title", 
                        text: "Insert new text"
                    }
                    console.log(notes);
                    setNotes([...notes, newNote]);
                    storeNotes(notes);
                    navigation.navigate('Note',  {
                        note: newNote,
                    });

                    
                }} name="edit" size={30} color="#FFF"/>
            ),
        })
    })

    return (
        <ScrollView>
            <Notes notes={notes} navigation={navigation} />
        </ScrollView>
    )
}

export default Home
