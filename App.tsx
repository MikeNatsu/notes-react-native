
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useState } from 'react';
import MyStack from './components/MyStack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  
  return (
    // View Component
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
 
  );
};

    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60, 
    backgroundColor:'#22231E',
  },
  
});
