import React from 'react'
import { ScrollView, StyleSheet} from 'react-native'
import Notes from './Notes'
import Icon from 'react-native-vector-icons/FontAwesome5'

//Styles 
const styles = StyleSheet.create({
    editIcon:{
        marginRight:30, 
    }
})


const Home = ({navigation} : {navigation : any}) => {

    React.useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: ()=>(
                <Icon style={styles.editIcon} onPress={() =>{
                    navigation.navigate('Note',  {
                        id: 5,
                        note: {
                            id: 3, 
                            title: 'New Title 24',
                            text: 'Insert New text'
                        },
                    });
                }} name="edit" size={30} color="#FFF"/>
            ),
        })
    })

    return (
        <ScrollView>
            <Notes navigation={navigation}/>
        </ScrollView>
    )
}

export default Home
