

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Table__one from './Components/Table__one';
import Table__two from './Components/Table__two';

const Root = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Table__one navigation={navigation}/>
      <Table__two navigation={navigation}/>
      <StatusBar style='auto'/>
    </View>
  )
}

export default Root


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
});