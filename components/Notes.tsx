import React, { Component } from 'react'
import {View, Text, StyleSheet } from 'react-native';
import {useState} from 'react'

interface note{
    id: number,
    title: string,
    text: string,
}

const Notes = ({navigation, notes} : {navigation : any, notes : Array<note>}) => {

    return (
        <View >
            {notes.map((item : note, index: number)=>{
                return (
                    <View key={index.toString()}>
                        <Text onPress={()=>{navigation.navigate('Note', {
                            id: index,
                            note: notes[index],
                        })}} style={styles.todo} key={index.toString()}>{item.title}</Text>
                    </View> 
                )
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
