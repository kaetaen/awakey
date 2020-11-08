import React, { createContext, useState, useEffect } from 'react'
import { AsyncStorage } from 'react-native'
import * as auth from '../services/auth'

const AuthContext = createContext({ signed: false, user: {} })

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadStorageData () {
      const storagedUser = await AsyncStorage.getItem('@RNAuth:user')
      const storagedToken = await AsyncStorage.getItem('@RNAuth:token')

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser))
        setLoading(false)
      } else if (!storagedUser && !storagedToken) {
        setLoading(false)
      }
    }

    loadStorageData()
  }, [])

  async function signIn () {
    const response = await auth.signIn()
    setUser(response.type)

    await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.type))
    await AsyncStorage.setItem('@RNAuth:token',  response.token)
  }
  
  function signOut () {
    AsyncStorage.clear().then(() => {
      setUser(null)
    })
  }

  return (
    <AuthContext.Provider value={{ signed: !! user, user, signIn, signOut, loading }}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthContext
