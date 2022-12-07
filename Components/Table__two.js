import { Text, View } from 'react-native'
import React from 'react'
import {s} from './css/t__2'

const Table__two = () => {
  return (
    <View style={s.container}>
      <View style={s.tableWrap}>
        <Text style={s.total}>Team B</Text>
        <View style={s.squares}></View>
        <View style={s.squares}></View>
        <View style={s.points}></View>
        <Text style={s.undo}>Undo</Text>
      </View>
    </View>
  )
}

export default Table__two

