import React, { Component } from 'react'
import {View, Text, StyleSheet, Button} from 'react-native';
import { Navigation } from 'react-native-navigation';
import {useState} from 'react'
import Header from './Header'

interface note{
    id: number,
    title: string,
    text: string,
}

const Notes = ({navigation} : {navigation : any}) => {

    const [notes, setNotes] = useState([
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
        <View>
            {notes.map((item : note, index: number)=>{
                return <Text onPress={()=>{navigation.navigate('Note')}} style={styles.todo} key={index.toString()}>{item.title}</Text>;               
            })}
        </View>
    )

}

const Note = () => {
    return (
        <View>
           
            <Text>Hi</Text>
        </View>
   )
}

Navigation.registerComponent('Notes', () => Notes);
Navigation.registerComponent('Note', ()=> Note);

Navigation.events().registerAppLaunchedListener(async () =>{
    Navigation.setRoot({
        root: {
            stack:{
                children:[{
                        component:{
                            name: 'Notes'
                        }
                    }
                ]
            }
        }
    })
})

const styles = StyleSheet.create({
    todo:{
        color: 'white',
        textDecorationLine:'underline',
        fontSize: 50,
        margin: 20
    }
})
export default Notes
