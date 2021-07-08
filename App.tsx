
import React from 'react';
import MyStack from './components/MyStack';
import { NavigationContainer } from '@react-navigation/native';
import NotesProvider from './utils/notesContext';
export default function App() {
  return (
      <NavigationContainer>
        <NotesProvider>
         <MyStack />
        </NotesProvider>
      </NavigationContainer>
  );
};
