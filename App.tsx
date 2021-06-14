import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useState } from 'react';
import Header from './components/Header';
import Todos from './components/Todos';
export default function App() {
  //Todos
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "New Title", 
      text: "Hello world"
    },
    {
      id: 2,
      title: "Good Morning",
      text: "This is not a comment but a quote that should probably touch your heart",
    }
  ]);
  

  return (
    // View Component
    <View style={styles.container}> 
      <Header title="Notes"/>
      <Todos todos={todos}/>
    </View>
 
  );
};

    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60, 
    backgroundColor:'#22231E',
  },
  
});
