import { Text, TouchableOpacity, View } from 'react-native'
import {s} from './css/t__1'
import Square from './Square'
import React from 'react'

const Table__one = () => {
    return (
    <View style={s.container}>
      <View style={s.tableWrap}>
        <Text style={s.total}>Team A</Text>
        <View style={s.squares}>
            <Square count={0}/>
            <Square count={0}/>
            <Square count={0}/>
            <Square count={0}/>
        </View>
        <View style={s.squares}>
            <Square count={0}/>
            <Square count={0}/>
            <Square count={0}/>
            <Square count={0}/>
        </View>
        <View style={s.points}>
            <TouchableOpacity><Text>1</Text></TouchableOpacity>
            <TouchableOpacity><Text>5</Text></TouchableOpacity>
            <TouchableOpacity><Text>2</Text></TouchableOpacity>
        </View>
        <Text style={s.undo}>Undo</Text>
      </View>
    </View>
  )
}

export default Table__one