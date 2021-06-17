import React from 'react';
import { StyleSheet, Text, View, Appearance, StatusBar } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { NavegacaoPrincipal } from './src/navigations';
import firebase from 'firebase';
import { firebaseConfig } from './src/config/firebase';


firebase.initializeApp(firebaseConfig)

const Dark = {
  ...DefaultTheme,
  roundness: 2,
  myOwnProperty: true,
  colors: {
    ...DefaultTheme.colors,
    background: '#000000',
    primary: '#f7931e',
    accent: '#f8931f',
    text: 'rgba(255, 255, 255, 1)',
    placeholder: 'rgba(201, 201, 201, 0.7)',
    backdrop: 'rgba(0,0,0, 0.95)',

  }
};

const Light = {
  ...DefaultTheme,
  roundness: 2,
  myOwnProperty: true,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
    primary: '#f7931e',
    accent: '#c9c9c9',
    text: 'rgba(0, 0, 0, 1)',
    placeholder: 'rgba(48, 48, 48, 0.7)',
    backdrop: 'rgba(255,255,255, 0.95)',


  }
};


const ColorScheme = Appearance.getColorScheme();

export default function App() {
  return (
    <PaperProvider theme={ColorScheme == 'dark' ? Dark : Light} settings={{ icon: props => <AwesomeIcon {...props} />, }}>
      <StatusBar barStyle={ColorScheme == 'dark' ? 'light-content' : 'dark-content'} backgroundColor="rgba(0,0,0,0)" />
      <NavegacaoPrincipal />
    </PaperProvider>
  );
}
