/* eslint-disable prettier/prettier */
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { ThemeProvider } from 'styled-components';

import theme from './src/styles/theme';

import Routes from './src/routes';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
