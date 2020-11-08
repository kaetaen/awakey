import React, { useContext } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button 
} from 'react-native'

import AuthContext from '../../contexts/auth' 

const style = StyleSheet.create({
  telaInicial: {
    backgroundColor: 'pink',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  texto: {
    color: 'blue',
    fontSize: 50,
  }
})

function Dashboard () {

  const authContext = useContext(AuthContext)

  return (
    <View style={style.telaInicial}>
      <Text style={style.texto}> Meu Dashboard </Text>
      <Button
        title="Logout"
        onPress={authContext.signOut}
      />
    </View>
  )
}

export default Dashboard
