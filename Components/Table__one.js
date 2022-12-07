import { Text, TouchableOpacity, View } from 'react-native'
import {s} from './css/t__1'
import Square from './Square'
import React from 'react'

const Table__one = () => {
    const [count1, setCount1] = React.useState(0)
    const [count2, setCount2] = React.useState(0)
    const [count3, setCount3] = React.useState(0)
    const [count4, setCount4] = React.useState(0)

    const [count5, setCount5] = React.useState(0)
    const [count6, setCount6] = React.useState(0)
    const [count7, setCount7] = React.useState(0)
    const [count8, setCount8] = React.useState(0)
    
    return (
    <View style={s.container}>
      <View style={s.tableWrap}>
        <Text style={s.total}>Team A</Text>
        <View style={s.squares}>
            <Square count={count1}/>
            <Square count={count2}/>
            <Square count={count3}/>
            <Square count={count4}/>
        </View>
        <View style={s.squares}>
            <Square count={count5}/>
            <Square count={count6}/>
            <Square count={count7}/>
            <Square count={count8}/>
        </View>
        <View style={s.points}>
            <TouchableOpacity style={s.point}><Text style={{ color:'white',}}>1</Text></TouchableOpacity>
            <TouchableOpacity style={s.point5}><Text style={{ color:'black',}}>5</Text></TouchableOpacity>
            <TouchableOpacity style={s.point}><Text style={{ color:'white',}}>2</Text></TouchableOpacity>
        </View>
        <TouchableOpacity style={s.undo}><Text style={{ color:'white',}}>Undo</Text></TouchableOpacity>
      </View>
    </View>
  )
}

export default Table__one