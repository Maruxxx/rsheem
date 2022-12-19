import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView } from 'react-native'
import React from 'react'

const WinModal = ({teamName}) => {
  return (
    <SafeAreaView style={{flex: 1, zIndex: 100, position: 'absolute'}}>
            <View style={styles.container}>
                
                <TextInput
                value={teamName}
                onChangeText={(teamName) => setTeamName(teamName)}
                placeholder={'Write your team name!'}
                style={styles.input}
                />
                <TouchableOpacity>
                    <Text style={{color: 'white'}}>Change name</Text>
                </TouchableOpacity>
            </View>
    </SafeAreaView>
  )
}

export default WinModal

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        height: 150,
        width: 300,
        backgroundColor: 'black',
        borderRadius: 30
      },
      input: {
        width: 250,
        height: 44,
        padding: 10,
        marginTop: 20,
        marginBottom: 10,
        backgroundColor: 'black',
        color: 'white',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 30,
        textAlign: 'center',
      },

})