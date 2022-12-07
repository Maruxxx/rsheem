import { StyleSheet } from "react-native"

export const s = StyleSheet.create({
    
    container:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
        color: 'white',
        height: '35%',
        width: '90%',
        borderColor: 'red',
        borderStyle: 'solid',
        borderWidth: 3,
        marginBottom: 10
    },

    tableWrap:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    squares:{
        height: 50,
        width: 300,
        marginBottom: 10,
        borderColor: 'red',
        borderStyle: 'solid',
        borderWidth: 3,
    },

    total:{
        color: 'white',
        marginBottom: 10,
    },
    undo:{
        color: 'white'
    },

    text: {
        color: 'white'
    }

})