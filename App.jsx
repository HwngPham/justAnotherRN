import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import { MainNavigation } from './src/navigation/MainNavigation';

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
