import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

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
  return (
    <View style={style.telaInicial}>
      <Text style={style.texto}> Meu Dashboard</Text>
    </View>
  )
}

export default Dashboard
