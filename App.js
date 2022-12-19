import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Table__one from './Components/Table__one';
import Table__two from './Components/Table__two';


export default function App() {
  return (
    <View style={styles.container}>
      <Table__one />
      <Table__two />
      <StatusBar style='auto'/>
    </View>
  );
}

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
