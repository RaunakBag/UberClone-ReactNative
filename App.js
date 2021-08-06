import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux'
import {store} from './app/redux/store'
import HomeScreen from './app/screens/HomeScreen';

export default function App() {
  return (
    <Provider store={store}>
        <HomeScreen/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
