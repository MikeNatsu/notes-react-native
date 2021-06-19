import React from 'react'
import {View, Text, Button} from 'react-native'
import Header from './Header'

const Note  = ({route , navigation } : {route : any,navigation : any}) => {
    const { id , note } = route.params; 
    return (
        <View>
            <Text>{id}</Text>
            {console.log(note)}
            <Text> {note.title}</Text>
            <Text>{note.text}</Text>
            {/* <Button title="Go back" onPress={() =>{}} ></Button> */}
        </View>
   )
}

export default Note