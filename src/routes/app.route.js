/* eslint-disable prettier/prettier */
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../screens/SignIn';
import ChatRoom from '../screens/ChatRoom';
// import ChatRoom from '../screens/ChatRoom'
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
    </AppStack.Navigator>
  );
}
