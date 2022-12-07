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
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        height: 40,
        width: 300,
        marginBottom: 10,
        borderColor: 'red',
        borderStyle: 'solid',
        borderWidth: 3,
        marginHorizontal: 10,
    },

    points:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: 'green',
        borderStyle: 'solid',
        borderWidth: 3,
        height: 50,
        width: 200,
        marginBottom: 10,
    },  

    point:{
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center',
        width: 45,
        aspectRatio: 1 / 1,
        borderColor: 'green',
        borderStyle: 'solid',
        borderWidth: 3,
        borderRadius: 30,
        backgroundColor: 'black'
    },  

    point5:{
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        aspectRatio: 1 / 1,
        borderColor: 'green',
        borderStyle: 'solid',
        borderWidth: 3,
        borderRadius: 30,
        backgroundColor: 'white'
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