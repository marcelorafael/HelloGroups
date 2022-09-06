/* eslint-disable prettier/prettier */
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../screens/SignIn';
import ChatRoom from '../screens/ChatRoom';
import Messages from '../screens/Messages';
import Search from '../screens/Search';
// import ChatRoom from '../screens/ChatRoom'

const AppStack = createNativeStackNavigator();

export default function AppRoutes(params) {
  return (
    <AppStack.Navigator initialRouteName="ChatRoom">
      <AppStack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          title: 'Faça o login',
          navigationBarColor: '#3075DD',
          statusBarColor: '#3075DD',
          headerShown: false,
        }}
      />

      <AppStack.Screen
        name="ChatRoom"
        component={ChatRoom}
        options={{
          headerShown: false,
        }}
      />

      <AppStack.Screen
        name="Messages"
        component={Messages}
        options={({ route }) => ({
          title: route.params.thread.name,
        })}
      />

      <AppStack.Screen
        name="Search"
        component={Search}
        options={{
          title: 'Procurar grupo.',
        }}
      />
    </AppStack.Navigator>
  );
}
