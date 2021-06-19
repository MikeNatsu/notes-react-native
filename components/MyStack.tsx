
import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Note from './Note'

const Stack = createStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Note" component={Note}/>
        </Stack.Navigator>
    )
}

export default MyStack
