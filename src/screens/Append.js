import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Append() {
  return (
    <View style={styles.wrapper}>
      <Text>Append Screen</Text>
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
