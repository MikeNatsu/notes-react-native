import React, { useState, createContext, ReactNode } from 'react';

type Props = {
	children: ReactNode;
};

export interface note {
	id: string;
	title: string;
	text: string;
}

interface NoteContextFunction {
	notes: note[];
	setNotes: (notes: note[]) => void;
	isDeletable: boolean;
	enableDelete: (turn: boolean) => void;
}

export const notesContext = createContext<NoteContextFunction>({
	notes: [],
	setNotes: () => {},
	isDeletable: false,
	enableDelete: () => {},
});

export default function NotesProvider({ children }: Props) {
	const [notes, setNotes] = useState<note[]>([]);
	const [isDeletable, enableDelete] = useState<boolean>(false);
	return (
		<notesContext.Provider
			value={{ notes, setNotes, isDeletable, enableDelete }}
		>
			{children}
		</notesContext.Provider>
	);
}
