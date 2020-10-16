function vs (type, size=100) {
  /*
   * This function calculates the height and width of the
   * viewport (simulating the behavior of the units vh and vw)
   *
   * > type: String -> 'width' or 'height'
   * > value: Number -> 0 - 100
   * >> returns size: Number
   */

  const vh = Dimensions.get('window').height
  const vw = Dimensions.get('window').width

  if (type === 'height') {
    return vh / 100 * size
  } 

  if (type === 'width') {
    return vw / 100 * size
  }
  
  console.warn('This type doesn\'t exists')
}

export default vs
