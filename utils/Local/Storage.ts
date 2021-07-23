import AsyncStorage from '@react-native-async-storage/async-storage';
import { note } from '../notesContext';

export const storeNotes = async (value: Array<note>) => {
	try {
		const valueJSON = JSON.stringify(value);
		await AsyncStorage.setItem('@Notes', valueJSON);
	} catch (error) {
		console.log(error);
	}
};

export const getNotes = async () => {
	try {
		const jsonValue = await AsyncStorage.getItem('@Notes');
		return jsonValue != null ? JSON.parse(jsonValue) : null;
	} catch (error) {
		console.log(error);
	}
};

export const deleteNote = async (id: string) => {
	try {
		const request = await getNotes();
		const newNotes = request.filter((item: note) => {
			return item.id !== id;
		});
		storeNotes(newNotes);
	} catch (error) {
		console.log(error);
	}
};
