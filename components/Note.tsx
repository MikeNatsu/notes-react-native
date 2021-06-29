import React, { useLayoutEffect, useState } from 'react'
import {View, StyleSheet, Button} from 'react-native'
import EditableContainer from './EditableContainer';
import { HeaderBackButton } from '@react-navigation/stack';

const Note  = ({route , navigation } : {route : any,navigation : any}) => {
    const {id , note } = route.params; 
    const [bodyText, setBodyText] = useState<string>(note.text);
    const [titleText, setTitleText] = useState<string>(note.title); 

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft:()=>(
                <HeaderBackButton
                    onPress={()=>{navigation.navigate('Home',  {
                        id: id,
                        title: titleText, 
                        text: bodyText,                         
                    }); }}
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
                    onChangeText={(text: string) =>{ setTitleText(text) }}
                    value={titleText}
               />
            </View>
            {/* Text Container */}
            <View>
                <EditableContainer
                    style={styles.textField}
                    multiline 
                    onChangeText={(text : string) => setBodyText(text)} 
                    value={bodyText}
                />
            </View> 
            <Button title="click me" onPress={()=>{console.log("Title text", titleText)}}></Button>               
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