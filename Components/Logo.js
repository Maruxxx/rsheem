import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Logo = () => {
  return (
    <View style={s.container}>
      <Text style={s.text}>Logo</Text>
    </View>
  )
}

export default Logo

const s = StyleSheet.create({
  container:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
    color: 'white',
    height: '15%',
    width: '90%',
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 3,
    marginBottom: 10
},

text: {
    color: 'white'
}
})