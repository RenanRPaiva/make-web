import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeView} from './views/Home';
import {LoginView} from './views/Login';
import {OrdersView} from './views/Orders';
import auth from '@react-native-firebase/auth';
import {getUser} from './services/getUser';
import {useDispatch} from 'react-redux';
import {deleteUser, updateUser} from './store/slices/userSlice';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Orders: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Routes() {
  const dispatch = useDispatch();
  useEffect(() => {
    auth().onAuthStateChanged(async currentUser => {
      if (currentUser) {
        const user = await getUser(currentUser.uid);
        dispatch(updateUser(user));
      } else {
        dispatch(deleteUser());
      }
    });
  }, [dispatch]);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#BD8085',
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
          fontFamily: 'Lato-Regular',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={HomeView}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginView}
        options={{
          title: 'Entrar no sistema',
        }}
      />
      <Stack.Screen
        name="Orders"
        component={OrdersView}
        options={{
          title: 'Pedidos',
        }}
      />
    </Stack.Navigator>
  );
}
