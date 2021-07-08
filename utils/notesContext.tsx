import React,{ useState, createContext, ReactNode } from 'react'

type Props = {
    children: ReactNode;

}

export interface note{
    id: number | string;
    title: string;
    text: string;  
}

interface NoteContextFunction{
    notes: note[];
    setNotes: (notes : note[]) => void; 
}

export const notesContext = createContext<NoteContextFunction>({
    notes:[],
    setNotes: ()=>{},
});


export default function NotesProvider ({children} : Props){ 
    const [notes, setNotes ] = useState<note[]>([
        {
            id: 0,
            title: "Title 1",
            text: "text 1"
        },
        {
            id: 1,
            title: "Title 2",
            text: "text 2",   
        }

    ]); 
    return (
        <notesContext.Provider value={{notes, setNotes}}>
            {children}
        </notesContext.Provider>
    ); 
}
