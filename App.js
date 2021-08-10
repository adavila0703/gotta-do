import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { DropDown } from './src/features/dropdown/DropDown';

const App = () => {
  return (
    <View style={styles.container}>
      <DropDown />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
