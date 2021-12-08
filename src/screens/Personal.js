import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Personal() {
  const navigation = useNavigation();
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={() => navigation.navigate('Teeth')}>
        <Text>Формула зубов</Text>
      </TouchableOpacity>
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
