import React from 'react';
import {Alert, Button, StyleSheet, View} from 'react-native';

export default function Login({route}) {
  const value = false;
  if (value) {
    Alert.alert('Что-то пошло не так');
  }

  return (
    <View style={styles.wrapper}>
      <Button
        title="login"
        onPress={() => route.params.setLogin(Math.round(Math.random()))}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
