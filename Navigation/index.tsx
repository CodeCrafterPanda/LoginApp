import {createStackNavigator} from '@react-navigation/stack';
import Register from '../Components/Register';
import Login from '../Components/Login';
import Charts from '../Components/Charts';
import React from 'react';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerMode: 'screen'}}>
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Charts"
        component={Charts}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
