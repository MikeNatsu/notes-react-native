
import React from 'react';
import MyStack from './components/MyStack';
import { NavigationContainer } from '@react-navigation/native';
import NotesProvider from './utils/notesContext';
import 'react-native-get-random-values'
export default function App() {
  return (
      <NavigationContainer>
        <NotesProvider>
         <MyStack />
        </NotesProvider>
      </NavigationContainer>
  );
};
