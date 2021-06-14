import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Header = ({title} : { title: string }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height: 60, 
        backgroundColor: '#6E7D69', 
    },
    text:{
        color: 'white',
        padding: 15,
        textAlign:'center',
        fontSize: 24, 
    }
});


export default Header
