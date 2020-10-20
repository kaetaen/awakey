import React, { useContext } from 'react'
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native'

import AuthContext from '../../contexts/auth'

import styles from './styles'
import theme from '../../styles/colorscheme'

function Login () {

  const { signed, signIn } = useContext(AuthContext)

  const handleSignIn = () => {
    signIn()
  }

  return (
      <ScrollView style={styles.mainContainer}>
        <View style={styles.header}>
          <Text style={styles.title}> Awakey </Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.subtitle}> Login </Text>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor={theme.darkFont}
              />
              <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor={theme.darkFont}
                secureTextEntry={true}
              />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity>
              <Text style={styles.button} onPress={handleSignIn}> Sign In </Text>
            </TouchableOpacity>
            <TouchableOpacity delayPressIn={30}>
              <Text style={styles.button}> Sign Up </Text>
            </TouchableOpacity>
          </View>

        </View>

      </ScrollView>
  )
}

export default Login
