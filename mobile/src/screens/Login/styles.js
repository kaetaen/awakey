import { StyleSheet } from 'react-native'
import * as vs from '../../styles/viewportSize'

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#f8f8f2'
  },

  header: {
    height: vs('height', 20),
    width: vs('width')
  }

})

export default styles
