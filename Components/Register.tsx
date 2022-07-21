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

export default function Register(props: any) {
  const [email, setEmail] = React.useState<String>('');
  const [password, setPassword] = React.useState<String>('');
  const [matchPassword, setMatchPassword] = React.useState<String>('');
  const [error, setError] = React.useState<String>('');

  const handleSubmit = async () => {
    console.log(email);
    console.log(password);
    console.log(matchPassword);
    if (password !== matchPassword) {
      return setError('Passwords not matched.');
    }
    if (email.length < 12) {
      return setError('Email should be minimum 12 characters.');
    }

    console.log('Storing in Async Storage');
    await AsyncStorage.setItem(
      'REGISTERED_USER',
      JSON.stringify({email, password}),
    );
    console.log('Stored in Async Storage');
    props.navigation.navigate('Login');
  };
  const clearError = () => {
    setError('');
  };

  return (
    <View style={{flex: 1, alignItems: 'flex-start'}}>
      <Text style={styles.headerStyle}>Register</Text>
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
      <TextInput
        placeholder="Match Password"
        style={styles.input}
        secureTextEntry
        onChangeText={text => {
          clearError();
          setMatchPassword(text);
        }}
      />

      {error && <Text style={styles.errorTextStyle}>{error}</Text>}
      <View style={styles.buttonContainer}>
        <Button color="blue" title="Register" onPress={handleSubmit} />
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
