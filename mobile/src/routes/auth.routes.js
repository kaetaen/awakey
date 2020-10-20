import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

import Login from '../screens/Login'

function Auth () {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  )
}

export default Auth
