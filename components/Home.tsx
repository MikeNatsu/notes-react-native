import React from 'react'
import {ScrollView, StyleSheet} from 'react-native'
import Notes from './Notes'

const Home = ({navigation} : {navigation : any}) => {
    return (
        <ScrollView>
            <Notes navigation={navigation}/>
        </ScrollView>
    )
}

export default Home
