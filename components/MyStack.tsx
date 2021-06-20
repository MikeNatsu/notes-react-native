
import React from 'react'
import { View , StyleSheet} from 'react-native'
import { DefaultNavigatorOptions } from '@react-navigation/native'
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import Home from './Home';
import Note from './Note'

const Stack = createStackNavigator();

interface optionsTypes{
    defaultScreen?: StackNavigationOptions,
    homeScreen: StackNavigationOptions, 
    noteScreen: StackNavigationOptions,
}

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
        headerTitleAlign:'center',
    },
    noteScreen:{
        
    }
}

const MyStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions.defaultScreen}>
            <Stack.Screen name="Home" options={screenOptions.homeScreen} component={Home} />
            <Stack.Screen name="Note" options={screenOptions.noteScreen} component={Note}/>
        </Stack.Navigator>
    )
}



export default MyStack
