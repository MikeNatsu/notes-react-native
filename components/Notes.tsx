import React, { Component } from 'react'
import {View, Text, StyleSheet, Button} from 'react-native';
import {useState} from 'react'


interface note{
    id: number,
    title: string,
    text: string,
}

const Notes = ({navigation} : {navigation : any}) => {

    const [notes, setNotes] = useState<Array<note>>([
        {
          id: 1,
          title: "New Title", 
          text: "Hello world"
        },
        {
          id: 2,
          title: "Good Morning",
          text: "This is not a comment but a quote that should probably touch your heart",
        }
    ]);
      

    return (
        <View >
            
            {notes.map((item : note, index: number)=>{
                return <View key={index.toString()}>
                    
                    <Text onPress={()=>{navigation.navigate('Note', {
                        id: index,
                        note: notes[index],
                    })}} style={styles.todo} key={index.toString()}>{item.title}</Text>

                </View> 
            })}
        </View>
    )

}

const styles = StyleSheet.create({
    todo:{
        color: 'white',
        marginLeft: 40,
        marginRight: 30, 
        fontSize: 30,
        margin: 20,
        paddingBottom: 10,
        borderBottomColor: 'rgba(255, 255, 255, .3)',
        borderBottomWidth: 2,
    }
})

export default Notes
