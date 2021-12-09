import React from 'react';
import {StyleSheet, View} from 'react-native';
import AddButton from '../components/UI/Home/AddButton';
import Card from '../components/UI/Home/Card';
import Header from '../components/UI/Home/Header';
import {COLORS} from '../setings/theme';

export default function Home() {
  return (
    <View style={styles.wrapper}>
      <Header />
      <Card />
      <AddButton />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  btn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.BLUE,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 40,
    right: 30,
  },
});
