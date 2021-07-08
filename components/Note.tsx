import React, { useContext, useLayoutEffect, useState } from 'react'
import {View, StyleSheet, Button, AsyncStorage } from 'react-native'
import EditableContainer from './EditableContainer';
import { HeaderBackButton } from '@react-navigation/stack';
import { notesContext } from '../utils/notesContext';
import { v4 as uuidv4} from 'uuid'

const Note  = ({route , navigation } : {route : any,navigation : any}) => {
    const {id , note } = route.params; 
    const [bodyText, setBodyText] = useState<string>(note.text);
    const [titleText, setTitleText] = useState<string>(note.title); 
    const {notes, setNotes} = useContext(notesContext);
    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft:()=>(
                <HeaderBackButton
                    onPress={()=>{navigation.navigate('Home');
                }}
                />
            ),
        })        
    }, [])

    return (
        <View>
            {/* Title Container */}
            <View style={styles.titleContainer}>
               <EditableContainer
                    style={styles.editableTitle}
                    onChangeText={(text: string) =>{
                        setTitleText(text); 
                        
                        const updatedNotes = notes.filter((noteFiltered,index)=>{
                            return noteFiltered.id !== id;
                        })

                        console.log(updatedNotes)
                        setNotes([...updatedNotes, {
                            id: id,
                            title: text,
                            text: bodyText
                        }] );
                    }}
                    value={titleText}
               />
            </View>
            {/* Text Container */}
            <View>
                <EditableContainer
                    style={styles.textField}
                    multiline 
                    onChangeText={(text : string) => {
                        setBodyText(text);

                        const updatedNotes = notes.filter((noteFiltered,index)=>{
                            return noteFiltered.id !== id;
                        })

                        console.log(updatedNotes)
                        setNotes([...updatedNotes, {
                            id: id,
                            title: titleText,
                            text: text
                        }] );
                    }} 
                    value={bodyText}
                />
            </View> 
            <Button title="click me" onPress={()=>{setNotes([])}}></Button>               
        </View>
   )
}

const styles = StyleSheet.create({
    titleContainer:{
        display: 'flex',
        margin: 25,
        paddingBottom: 10,
        borderBottomWidth: 2,
        borderBottomColor: 'rgba(255, 255, 255, 0.05)',
    },
    editableTitle:{
        fontSize: 30,
        color:'white',
    },
    textField:{
        fontSize: 25,
        color: 'white',
        margin: 15,
    }
}) 

export default Note