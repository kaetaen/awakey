import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from '../screens/Login'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} />
      </Tab.Navigator>
  );
}
