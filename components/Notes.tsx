import React, { Component, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { note, notesContext } from '../utils/notesContext';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { deleteNote } from '../utils/Local/Storage';

const styles = StyleSheet.create({
	todo: {
		color: 'white',
		marginLeft: 40,
		marginRight: 30,
		fontSize: 30,
		margin: 20,
		paddingBottom: 10,
		borderBottomColor: 'rgba(255, 255, 255, .3)',
		borderBottomWidth: 2,
	},
	deleteIcon: {
		marginRight: 20,
	},
});

const Notes = ({ navigation }: { navigation: any }) => {
	const { notes, setNotes, isDeletable } = useContext(notesContext);

	return (
		<View>
			{notes?.map((item: note, index: number) => {
				return (
					<View key={index.toString()}>
						<Text
							onPress={() => {
								navigation.navigate('Note', {
									id: notes[index].id,
									note: notes[index],
								});
							}}
							style={styles.todo}
							key={index.toString()}
						>
							{isDeletable ? (
								<View style={styles.deleteIcon}>
									<Icon
										onPress={() => {
											setNotes(
												notes.filter((noteFiltered) => {
													return noteFiltered.id !== item.id;
												})
											);
											deleteNote(item.id);
										}}
										name="times-circle"
										color="#F00"
										size={40}
										solid
									/>
								</View>
							) : (
								''
							)}

							{item.title}
						</Text>
					</View>
				);
			})}
		</View>
	);
};

export default Notes;
