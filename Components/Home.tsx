import {View, Text, Button} from 'react-native';
import React from 'react';

export default function Home(props: any) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{width: 300, height: 100}}>
        <Button
          title="Register"
          onPress={() => props.navigation.navigate('Register')}
        />
      </View>
      <View style={{width: 300, height: 100}}>
        <Button
          title="Login"
          onPress={() => props.navigation.navigate('Login')}
        />
      </View>
    </View>
  );
}
