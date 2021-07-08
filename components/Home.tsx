import React, { useContext } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import Notes from './Notes'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { note, notesContext } from '../utils/notesContext'

import { v4 as uuidv4} from 'uuid'
//Styles 
const styles = StyleSheet.create({
    editIcon:{
        marginRight:30, 
    }
})

const Home = ({navigation} : {navigation : any}) => {

    const {notes, setNotes} = useContext(notesContext); 

   //const storeNotes = async (value : Array<note>) =>{
       //try {
           //const valueJSON = JSON.stringify(value);
           //await AsyncStorage.setItem('@Notes', valueJSON);
       //} catch (error) {
           //console.log(error);
       //}
   //} 
   //storeNotes([{id: 2, title: "first", text:"idk"}])
   
   //const getNotes = async () => {

       //try {
           //const jsonValue = await AsyncStorage.getItem('@Notes');
           //console.log(jsonValue);       
           //return jsonValue != null ? JSON.parse(jsonValue) : null; 
       //} catch (error) {
           //console.log(error);
       //}
   //}
   
   //const deleteNote = async (id : number) => {
       //try {
           //const request = await getNotes();
           //const newNotes = request.filter((item: note) =>{
               //item.id !== id;
           //}) ;
           //storeNotes(newNotes)
       //} catch (error) {
           //console.log(error)
       //}
   //}  
   //useEffect(()=>{
       //getNotes().then(data =>{
           //setNotes(data);
       //})
       //if(noteupdate !== undefined){
           //console.log(noteupdate);
       //}

   //},[])

    React.useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: ()=>(
                <Icon style={styles.editIcon} onPress={() =>{
                    const newNote : note = {
                        id: uuidv4(), 
                        title: "New Title", 
                        text: "Insert new text"
                    }
                    setNotes([...notes, newNote]);
                    //storeNotes(notes);
                    navigation.navigate('Note',  {
                        id: newNote.id,
                        note: newNote,
                    });

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
