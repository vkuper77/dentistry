import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Personal from '../screens/Personal';
import Append from '../screens/Append';
import Edit from '../screens/Edit';
import Teeth from '../screens/Teeth';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Пациенты'}}
        />
        <Stack.Screen
          name="Personal"
          component={Personal}
          options={{title: 'Карта пациента'}}
        />
        <Stack.Screen
          name="Teeth"
          component={Teeth}
          options={{title: 'Формула зубов'}}
        />
        <Stack.Screen
          name="Append"
          component={Append}
          options={{title: 'Добавить пациента'}}
        />
        <Stack.Screen
          name="Edit"
          component={Edit}
          options={{title: 'Изменить пациента'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
