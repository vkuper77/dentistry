import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Personal from '../screens/Personal';
import Append from '../screens/Append';
import Edit from '../screens/Edit';
import Teeth from '../screens/Teeth';
import Login from '../screens/Login';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {COLORS} from '../setings/theme';

const ContentStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();

const ContentApp = () => (
  <ContentStack.Navigator>
    <ContentStack.Screen
      name="Home"
      component={Home}
      options={headerStyle.homeOptions}
    />
    <ContentStack.Screen
      name="Personal"
      component={Personal}
      options={{title: 'Карта пациента'}}
    />
    <ContentStack.Screen
      name="Teeth"
      component={Teeth}
      options={{title: 'Формула зубов'}}
    />
    <ContentStack.Screen
      name="Append"
      component={Append}
      options={{title: 'Добавить пациента'}}
    />
    <ContentStack.Screen
      name="Edit"
      component={Edit}
      options={{title: 'Изменить пациента'}}
    />
  </ContentStack.Navigator>
);

const LoginApp = ({setLogin}) => {
  return (
    <LoginStack.Navigator screenOptions={{headerShown: false}}>
      <LoginStack.Screen
        name="Login"
        component={Login}
        initialParams={{setLogin: setLogin}}
      />
    </LoginStack.Navigator>
  );
};

export default function AppNavigation() {
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  const pressLogin = isLogin => {
    setLoading(true);
    if (isLogin) {
      setLogin(true);
    }
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return loading ? (
    <View style={styles.wrapper}>
      <ActivityIndicator />
    </View>
  ) : (
    <NavigationContainer>
      {login ? <ContentApp /> : <LoginApp setLogin={pressLogin} />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const headerStyle = {
  homeOptions: {
    title: 'Пациенты',
    headerTintColor: COLORS.BLUE,
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 25,
    },
  },
};
