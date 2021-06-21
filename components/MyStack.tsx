
import React from 'react'
import { StyleSheet } from 'react-native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import Home from './Home';
import Note from './Note'
import Icon from 'react-native-vector-icons/FontAwesome5'

//Styles 
const styles = StyleSheet.create({
    editIcon:{
        marginRight:30, 
    }
})

const Stack = createStackNavigator();
const editIcon = (<Icon style={styles.editIcon}  name="edit" size={30} color="#FFF"/>); 

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
        headerRight: () => editIcon ,

    },
    noteScreen:{
        headerTitle: 'Back'
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
