import React from 'react'
import { TextInput } from 'react-native'

const EditableContainer  = (props : any) => {
    return (
       <TextInput
            {...props}
            editable
       />
    )
}

export default EditableContainer
