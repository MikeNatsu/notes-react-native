import { useState, createContext, ReactChild, ReactNode } from 'react'

export const notesContext = createContext<null>(null);

const notesProvider = ({children} : {children : any}) =>{
    const [notes, setNotes ] = useState([
        {
            id: 1,
            title: "Title 1",
            text: "text 1"
        },
        {
            id: 2,
            title: "Title 2",
            text: "text 2",   
        }

    ]); 
    return (
        {children}
    ); 
}

export default notesProvider; 