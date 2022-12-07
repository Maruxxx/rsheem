import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Square = ({count}) => {
  return (
    <View style={styles.square}>
        <Text style={{ color: 'white'}}>{count}</Text>
    </View>
  )
}

export default Square

const styles = StyleSheet.create({
    square: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 35,
        aspectRatio: 1 / 1,
        borderColor: 'white',
        borderStyle: 'solid',
        borderWidth: 3,
    }
})