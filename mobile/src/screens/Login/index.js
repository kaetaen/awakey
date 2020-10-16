import React from 'react'
import {
  View,
  Text,
  TextInput
} from 'react-native'

import styles from './styles'

function Login () {
  return (
    <View style={styles.mainView}>
      <View style={styles.header}>
        <Text> Awakay </Text>
      </View>
      <View>
        <TextInput placeholder="Usuário"/>
        <TextInput placeholder="Senha"/>
      </View>
    </View>
  )
}

export default Login
