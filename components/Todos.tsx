import React from 'react'
import {View} from 'react-native';

const Todos = ({todos} : {todos : any}) => {
    return (
        <View>
            {todos.map((item : Object, index: number)=>{
                console.log(item);
                return;               
            })}
        </View>
    )
}

export default Todos
