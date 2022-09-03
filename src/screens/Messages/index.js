import React from 'react';
import { View, Text } from 'react-native';

export default function Messages({ route }) {
  const { thread } = route.params;
  return (
    <View>
      <Text>Messages</Text>
    </View>
  );
}
