import { StyleSheet } from 'react-native'
import vs from '../../utils/scale'
import theme from '../../styles/colorscheme'

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.darkestBg
  }, 

  header: {
    alignItems: 'center',
    justifyContent: 'space-around',
    height: vs('height', 30),
    width: vs('width'),
    borderWidth: 1,
    borderBottomRightRadius: 100,
    backgroundColor: theme.darkBg
  },

  title: {
    fontSize: 60,
    color: theme.font,
    fontFamily: 'serif'
  },

  subtitle: {
    fontFamily:'serif',
    fontSize: 40,
    color: theme.font,
    marginTop: 30,
    marginBottom: 30
  },

  form: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },

  input: {
    fontFamily: 'serif',
    width: vs('width', 80),
    borderBottomWidth:3,
    borderColor: theme.purple,
    color: theme.font,
    padding: 10,
    textAlign: 'center',
    margin: 4,
    fontSize: 18,
    
  },

  buttonContainer: {
    flexDirection: 'row',
    width: vs('width', 80),
    justifyContent: 'space-around',
    margin: 30
  },

  button: {
    borderWidth: 0.5,
    borderRadius: 50,
    width: 100,
    height: 50,

    textAlign: 'center',
    backgroundColor: theme.darkBg,
    borderColor: theme.purple,
    color: theme.font,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'serif',
    paddingTop: 11
  },
})

export default styles
