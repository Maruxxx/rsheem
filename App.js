import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Root from './Root';
import Entry from './Entry';

export default function App() {
  
  const Stack = createNativeStackNavigator();

  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Entry" component={Entry} options={{headerShown: false}} />
        <Stack.Screen name="Root" component={Root} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>  
  );
}