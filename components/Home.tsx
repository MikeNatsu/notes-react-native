import React from 'react'
import {View} from 'react-native'
import Notes from './Notes'

const Home  = ({navigation} : {navigation : any}) => {
    return (
        <View>
            <Notes navigation={navigation}/>
        </View>
    )
}

export default Home
