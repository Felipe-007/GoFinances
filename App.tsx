import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';  //tela de loading

import Dashboard from './src/screens/Dashboard';
import theme from './src/global/styles/theme';

export default function App() {

  //carrega as fonts
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })

  //se as fontes nao estiverem carregadas cai aqui
  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <Dashboard />
    </ThemeProvider>
  );
}