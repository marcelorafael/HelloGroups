/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Button } from 'react-native';

import auth from '@react-native-firebase/app';
import { useNavigation } from '@react-navigation/native';

export default function ChatRoom() {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={{ color: 'black' }}>ChatRoom</Text>
      <Button title="Login" onPress={() => navigation.navigate('SignIn')} />
    </View>
  );
}
