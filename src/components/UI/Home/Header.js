import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default function Header() {
  return <Text style={styles.header}>11 сентября</Text>;
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: '800',
    color: 'black',
  },
});
