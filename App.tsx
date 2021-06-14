import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard  } from 'react-native';
import Header from './components/Header';

export default function App() {
  return (
    // View Component
    <View style={styles.container}> 
      <Header title="Notes"/>
    </View>
 
  );
};

    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60, 
  },
  
});
