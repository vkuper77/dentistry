import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const AddButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Append')}
      style={styles.btn}>
      <Text style={{fontSize: 25, color: 'white'}}>+</Text>
    </TouchableOpacity>
  );
};

const Card = () => {
  const navigation = useNavigation();
  return (
    <View style={{width: '100%', paddingTop: 20, paddingHorizontal: 16}}>
      <TouchableOpacity onPress={() => navigation.navigate('Personal')}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
            backgroundColor: 'lightblue',
            borderRadius: 8,
          }}>
          <Text>Carp person</Text>
          <TouchableOpacity
            style={{
              width: 30,
              height: 30,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 8,
              backgroundColor: '#2182ff',
            }}
            onPress={() => navigation.navigate('Edit')}>
            <Text style={{fontSize: 16, color: 'white'}}>#</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default function Home() {
  return (
    <View style={styles.wrapper}>
      <Card />
      <AddButton />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
  },
  btn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#2182ff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 40,
    right: 30,
  },
});
