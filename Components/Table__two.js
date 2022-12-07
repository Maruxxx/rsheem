import { TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import {s} from './css/t__2'
import Square from './Square'

const Table__two = () => {
    const [count1, setCount1] = React.useState(0)
    const [count2, setCount2] = React.useState(0)
    const [count3, setCount3] = React.useState(0)
    const [count4, setCount4] = React.useState(0)

    const [count5, setCount5] = React.useState(0)
    const [count6, setCount6] = React.useState(0)
    const [count7, setCount7] = React.useState(0)
    const [count8, setCount8] = React.useState(0)

    const t = count1 + count2 + count3 + count4 + count5 + count6 + count7 + count8

    const Undo = () => {
        if (count1 == 0) {
            setCount1(count1)
        } else if ((count1 == 1 || count1 <= 5) && count2 == 0) {
            setCount1(count1 - 1)      
        } else if ((count2 == 1 || count2 <= 5) && count3 == 0) {
            setCount2(count2 - 1) 
        } else if ((count3 == 1 || count3 <= 5) && count4 == 0) {
            setCount3(count3 - 1) 
        } else if ((count4 == 1 || count4 <= 5) && count5 == 0) {
            setCount4(count4 - 1) 
        } else if ((count5 == 1 || count5 <= 5) && count6 == 0) {
            setCount5(count5 - 1) 
        } else if ((count6 == 1 || count6 <= 5) && count7 == 0) {
            setCount6(count6 - 1) 
        } else if ((count7 == 1 || count7 <= 5) && count8 == 0) {
            setCount7(count7 - 1) 
        } else if ((count8 == 1 || count8 <= 5)) {
            setCount8(count8 - 1) 
        }
    }

    const Counter1 = () => {
        if (count1 == 0 || count1 < 5) {
            setCount1(count1 + 1)      
        } else if (count1 == 5 && (count2 == 0 || count2 < 5)) {
            setCount2(count2 + 1) 
        } else if (count2 == 5 && (count3 == 0 || count3 < 5)) {
            setCount3(count3 + 1) 
        } else if (count3 == 5 && (count4 == 0 || count4 < 5)) {
            setCount4(count4 + 1) 
        } else if (count4 == 5 && (count5 == 0 || count5 < 5)) {
            setCount5(count5 + 1) 
        } else if (count5 == 5 && (count6 == 0 || count6 < 5)) {
            setCount6(count6 + 1) 
        } else if (count6 == 5 && (count7 == 0 || count7 < 5)) {
            setCount7(count7 + 1) 
        } else if (count7 == 5 && (count8 == 0 || count8 < 5)) {
            setCount8(count8 + 1) 
        }
    }

    const Counter2 = () => {
        // count1
        if (count1 >= 0 && count1 < 4) {
            setCount1(count1 + 2)
        } else if (count1 == 4) {
            setCount1(count1 + 1)
            setCount2(count2 + 1)
        } 
        // count2
        else if (count1 == 5 && (count2 >= 0 && count2 < 4)) {
            setCount2(count2 + 2)
        } else if (count2 == 4) {
            setCount2(count2 + 1)
            setCount3(count3 + 1)
        } 
        // count3
        else if (count2 == 5 && (count3 >= 0 && count3 < 4)) {
            setCount3(count3 + 2)
        } else if (count3 == 4) {
            setCount3(count3 + 1)
            setCount4(count4 + 1)
        } 
        // count4
        else if (count3 == 5 && (count4 >= 0 && count4 < 4)) {
            setCount4(count4 + 2)
        } else if (count4 == 4) {
            setCount4(count4 + 1)
            setCount5(count5 + 1)
        } 
        // count5
        else if (count4 == 5 && (count5 >= 0 && count5 < 4)) {
            setCount5(count5 + 2)
        } else if (count5 == 4) {
            setCount5(count5 + 1)
            setCount6(count6 + 1)
        } 
        // count6
        else if (count5 == 5 && (count6 >= 0 && count6 < 4)) {
            setCount6(count6 + 2)
        } else if (count6 == 4) {
            setCount6(count6 + 1)
            setCount7(count7 + 1)
        } 
        // count7
        else if (count6 == 5 && (count7 >= 0 && count7 < 4)) {
            setCount7(count7 + 2)
        } else if (count7 == 4) {
            setCount7(count7 + 1)
            setCount8(count8 + 1)
        } 
        // count8
        else if (count7 == 5 && (count8 >= 0 && count8 < 4)) {
            setCount8(count8 + 2)
        } else if (count8 == 4) {
            setCount8(count8 + 1)
        }
    }

    const Counter5 = () => {
          // count1
          if (count1 == 0) {
            setCount1(count1 + 5)      
        } else if (count1 > 0 && count1 < 5) {
            setCount1(count1 + (5 - count1))
            setCount2(count1)
        } 
        // count2
        else if ( count1 == 5 && count2 == 0) {
            setCount2(count2 + 5)      
        } else if (count2 > 0 && count2 < 5) {
            setCount2(count2 + (5 - count2))
            setCount3(count2)
        } 
        // count3
        else if ( count2 == 5 && count3 == 0) {
            setCount3(count3 + 5 )      
        } else if (count3 > 0 && count3 < 5) {
            setCount3(count3 + (5 - count3))
            setCount4(count3)
        } 
        // count4
        else if (count3 == 5 && count4 == 0) {
            setCount4(count4 + 5 )      
        } else if (count4 > 0 && count4 < 5) {
            setCount4(count4 + (5 - count4))
            setCount5(count4)
        } 
        // count5
        else if (count4 == 5 && count5 == 0) {
            setCount5(count5 + 5)      
        } else if (count5 > 0 && count5 < 5) {
            setCount5(count5 + (5 - count5))
            setCount6(count5)
        } 
        // count6
        else if ( count5 == 5 && count6 == 0) {
            setCount6(count6 + 5)      
        } else if (count6 > 0 && count6 < 5) {
            setCount6(count6 + (5 - count6))
            setCount7(count6)
        } 
        // count7
        else if (count6 == 5 && count7 == 0) {
            setCount7(count7 + 5)      
        } else if (count7 > 0 && count7 < 5) {
            setCount7(count7 + (5 - count7))
            setCount8(count7)
        } 
        // count8
        else if (count7 == 5 && count8 == 0) {
            setCount8(count8 + 5)      
        } else if (count8 > 0 && count8 < 5) {
            setCount8(count8 + (5 - count8))
        } 
    }

    
    return (
    <View style={s.container}>
      <View style={s.tableWrap}>
        <Text style={s.total}>[{t}]Team B</Text>
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
            <TouchableOpacity onPress={Counter1} style={s.point}><Text style={{ color:'white',}}>1</Text></TouchableOpacity>
            <TouchableOpacity onPress={Counter5} style={s.point5}><Text style={{ color:'black',}}>5</Text></TouchableOpacity>
            <TouchableOpacity onPress={Counter2} style={s.point}><Text style={{ color:'white',}}>2</Text></TouchableOpacity>
        </View>
        <TouchableOpacity onPress={Undo} style={s.undo}><Text style={{ color:'white',}}>Undo</Text></TouchableOpacity>
      </View>
    </View>
  )
}

export default Table__two

