import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'

import { AuthProvider } from './contexts/auth'
import Routes from './routes'

function App () {
  return (
    <NavigationContainer>
      <StatusBar style="light"/>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  )
}

export default App
