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

export default function LoginApp() {
  const [email, setEmail] = React.useState<String>('');
  const [password, setPassword] = React.useState<String>('');
  const [matchPassword, setMatchPassword] = React.useState<String>('');
  const [error, setError] = React.useState<String>('');

  const handleSubmit = () => {
    console.log(email);
    console.log(password);
    console.log(matchPassword);
    if (password !== matchPassword) {
      setError('Passwords not matched.');
    }
    if (email.length < 12) {
      setError('Email should be minimum 12 characters.');
    }
    console.log('Submitting');
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
