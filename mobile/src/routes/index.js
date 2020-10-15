import React, { useContext } from 'react'
import { View, ActivityIndicator } from 'react-native'

import Auth from './auth.routes'
import App from './app.routes'

import AuthContext from '../contexts/auth'

function Routes () {
  
  const { signed, loading } = useContext(AuthContext)

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    )
  }

  return signed ? <App /> : <Auth />
}

export default Routes
