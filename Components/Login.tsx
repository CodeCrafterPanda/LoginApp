import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  Button,
  Alert,
} from 'react-native';

import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginApp(props: any) {
  const [email, setEmail] = React.useState<String>('');
  const [password, setPassword] = React.useState<String>('');
  const [error, setError] = React.useState<String>('');

  const handleSubmit = async () => {
    let rUserValue = await AsyncStorage.getItem('REGISTERED_USER');
    let registeredUser = !!rUserValue ? JSON.parse(rUserValue) : null;
    if (!registeredUser) return setError('User not found.');
    if (
      password !== registeredUser.password ||
      email !== registeredUser.email
    ) {
      return setError('Email or Password Wrong.');
    }

    props.navigation.navigate('Pokemons');
  };
  const clearError = () => {
    setError('');
  };

  return (
    <View style={{flex: 1, alignItems: 'flex-start'}}>
      <Text style={styles.headerStyle}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        onChangeText={text => {
          clearError();
          setEmail(text);
        }}
      />
      <TextInput
        placeholder="Enter Password"
        style={styles.input}
        secureTextEntry
        onChangeText={text => {
          clearError();
          setPassword(text);
        }}
      />
      {error && <Text style={styles.errorTextStyle}>{error}</Text>}
      <View style={styles.buttonContainer}>
        <Button color="blue" title="Submit" onPress={handleSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    margin: 10,
    width: Dimensions.get('window').width - 20,
    borderRadius: 5,
  },
  headerStyle: {fontSize: 20, alignSelf: 'center', margin: 20},
  buttonContainer: {width: Dimensions.get('window').width - 20, margin: 10},
  errorTextStyle: {fontSize: 15, alignSelf: 'center', margin: 20, color: 'red'},
});
