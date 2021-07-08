import React,{ useState, createContext, ReactNode } from 'react'

type Props = {
    children: ReactNode;

}

export interface note{
    id: number;
    title: string;
    text: string;  
}

interface NoteContextFunction{
    notes: note[] | undefined;
    setNotes: (notes : note[]) => void; 
}

export const notesContext = createContext<NoteContextFunction | null >({
    notes:undefined,
    setNotes: ()=>{}
});


export default function NotesProvider ({children} : Props){ 
    const [notes, setNotes ] = useState<note[]>([
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
        <notesContext.Provider value={{notes, setNotes}}>
            {children}
        </notesContext.Provider>
    ); 
}
