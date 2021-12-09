import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../../setings/theme';

const USER = {
  firstName: 'Анжелика',
  lastName: 'Матиева',
  diagnosis: 'пульпит, удаление зуба',
  time: '12:30',
};

export default function Card() {
  const navigation = useNavigation();
  // () => navigation.navigate('Edit')
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={() => navigation.navigate('Personal')}>
        <View style={styles.container}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.avatar}>
              <Text style={{color: 'white'}}>{USER.firstName[0]}</Text>
            </View>
            <View>
              <Text
                style={
                  styles.name
                }>{`${USER.firstName} ${USER.lastName}`}</Text>
              <Text style={styles.diagnosis}>{USER.diagnosis}</Text>
            </View>
          </View>
          <Text style={styles.time}>{USER.time}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.GREY,
  },
  avatar: {
    backgroundColor: '#A696C8',
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  diagnosis: {
    fontWeight: '500',
    fontSize: 14,
  },
  btnEdit: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#2182ff',
  },
  btnText: {
    fontSize: 16,
    color: 'white',
  },
  time: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: COLORS.BLUE,
    borderRadius: 15,
    color: 'white',
    fontWeight: '500',
  },
});
