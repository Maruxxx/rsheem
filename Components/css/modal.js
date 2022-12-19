import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 30,
        opacity: 1
      },
      input: {
        width: 250,
        height: 44,
        padding: 10,
        marginBottom: 20,
        backgroundColor: 'black',
        color: 'white',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 30,
        textAlign: 'center',
      },

      submit:{
        display: "flex", justifyContent: 'center', alignItems:'center',width: 120, height: 40, borderRadius: 30, backgroundColor: 'white', marginTop: 5
      }
})