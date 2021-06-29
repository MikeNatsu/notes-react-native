
import React from 'react'
import { StyleSheet } from 'react-native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import {useNavigation} from '@react-navigation/native'
import Home from './Home';
import Note from './Note'
import { notesContext } from '../utils/notesContext';

//Styles 
const styles = StyleSheet.create({
    editIcon:{
        marginRight:30, 
    }
})


const Stack = createStackNavigator();

interface optionsTypes{
    defaultScreen?: StackNavigationOptions,
    homeScreen: StackNavigationOptions, 
    noteScreen: StackNavigationOptions,
}

const MyStack = () => {

    const screenOptions : optionsTypes = { 
        defaultScreen:{
            headerTintColor:'#FFF',
            headerStyle: {
                backgroundColor: '#4D793E'
            },
            cardStyle: {
                backgroundColor: '#22231E'
            }
        },
        homeScreen:{
            headerTitleAlign:'center'
            
        },
        noteScreen:{
            headerTitle: 'Back',
            
        }
    }


    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions.defaultScreen}>
            <Stack.Screen name="Home" options={screenOptions.homeScreen} component={Home} />
            <Stack.Screen name="Note" options={screenOptions.noteScreen} component={Note}/>
        </Stack.Navigator>
    )
}



export default MyStack
