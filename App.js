import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Logo from './Components/Logo';
import Table__one from './Components/Table__one';
import Table__two from './Components/Table__two';


export default function App() {
  return (
    <View style={styles.container}>
      <Logo />
      <Table__one />
      <Table__two />
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
