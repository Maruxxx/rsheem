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
        // borderColor: 'red',
        // borderStyle: 'solid',
        // borderWidth: 3,
        marginBottom: -20
    },

    tableWrap:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },

    squares:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: 40,
        width: 300,
        marginBottom: 20,
        // borderColor: 'red',
        // borderStyle: 'solid',
        // borderWidth: 3,
        marginHorizontal: 10,
        marginVertical: 10,
    },

    points:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        // borderColor: 'green',
        // borderStyle: 'solid',
        // borderWidth: 3,
        height: 50,
        width: 200,
        marginVertical: 15,
    },  

    point:{
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center',
        width: 45,
        aspectRatio: 1 / 1,
        borderColor: 'white',
        borderStyle: 'solid',
        borderWidth: 3,
        borderRadius: 30,
        backgroundColor: 'black'
    },  

    point5:{
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 50,
        // borderColor: 'green',
        // borderStyle: 'solid',
        // borderWidth: 3,
        borderRadius: 10,
        backgroundColor: 'white',
        marginHorizontal: 20,
    },  

    total:{
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 20,
        fontSize: 20,
    },
    undo:{
        color: 'red'
    },

    text: {
        color: 'white'
    }
})