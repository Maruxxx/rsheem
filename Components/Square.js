import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Square = ({count}) => {
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    if (count >= 1 && count < 5) {
      setActive(true)
    } else {
      setActive(false)
    }
  }, [count])
  
  return (
    <>
    <View style={active ? styles.activeSquare : styles.square}>
        <Text style={active ? { color: 'red', fontWeight: 'bold', fontSize: 18,} : { color: 'white', fontWeight: 'bold', fontSize: 18,}  }>{count}</Text>
    </View>
    </>
  )
}

export default Square

const styles = StyleSheet.create({
    square: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 55,
        aspectRatio: 1 / 1,
        borderColor: 'white',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 8,
    },
    activeSquare: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 55,
        aspectRatio: 1 / 1,
        borderColor: 'red',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 8, 
    }, 
    // activeSquare: {
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     width: 55,
    //     aspectRatio: 1 / 1,
    //     borderColor: 'red',
    //     borderStyle: 'solid',
    //     borderWidth: 1,
    //     borderRadius: 10,
    //     marginHorizontal: 8, 
    // }, 
})