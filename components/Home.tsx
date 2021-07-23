import React, { useContext, useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Notes from './Notes';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { note, notesContext } from '../utils/notesContext';
import { v4 as uuidv4 } from 'uuid';
import { getNotes, storeNotes } from '../utils/Local/Storage';

//Styles
const styles = StyleSheet.create({
	editIcon: {
		marginRight: 30,
	},
});

const Home = ({ navigation }: { navigation: any }) => {
	const { notes, setNotes } = useContext(notesContext);

	useEffect(() => {
		getNotes().then((data) => {
			setNotes(data);
		});
	}, []);

	React.useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<Icon
					style={styles.editIcon}
					onPress={() => {
						const newNote: note = {
							id: uuidv4(),
							title: 'New Title',
							text: 'Insert new text',
						};

						if (notes != null) {
							setNotes([...notes, newNote]);
							storeNotes([...notes, newNote]);
						} else {
							setNotes([newNote]);
							storeNotes([newNote]);
						}
						navigation.navigate('Note', {
							id: newNote.id,
							note: newNote,
						});
					}}
					name="edit"
					size={30}
					color="#FFF"
				/>
			),
		});
	});
	return (
		<ScrollView>
			<Notes navigation={navigation} />
		</ScrollView>
	);
};

export default Home;
