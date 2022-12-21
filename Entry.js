import { View, Text, StyleSheet, Image, StatusBar } from 'react-native'
import React from 'react'
import SwipeButton from 'rn-swipe-button';



const Entry = ({navigation}) => {
  return (
    <View style={styling.container}>
      <Image style={styling.image} source={require('./assets/entry.png')}/>
      <SwipeButton 
        height={45} 
        width={210} 
        title="Start"
        railBackgroundColor="white"
        railStyles={{borderRadius: 30, backgroundColor:'black', borderColor: 'white',}}
        thumbIconStyles={{borderRadius: 30}}
        thumbIconBackgroundColor='black'
        thumbIconBorderColor='white'
        onSwipeSuccess={() => {navigation.replace('Root')}}
        titleFontSize={17}
        titleStyles={{paddingLeft: 8,}}
      />
      <Text style={{
        position:'absolute',
        bottom: 60,
        color: 'white',
        opacity: 0.5
      }}>Developed By Marux</Text>
      <StatusBar style='auto'/>
    </View>
  )
}

export default Entry

const styling = StyleSheet.create({

    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: 'black',
        position:'relative'
    },

    image:{
        width: 200,
        height: 110,
        resizeMode: 'contain',
        // borderColor:'red',
        // borderStyle: 'solid',
        // borderWidth: 2,
    },

    button:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width: 150,
        height: 40,
        backgroundColor: 'white',
        borderRadius:20,
        borderColor:'red',
        borderStyle: 'solid',
        borderWidth: 2,
    },


})