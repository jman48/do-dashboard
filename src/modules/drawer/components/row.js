import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text } from 'native-base';

const Row = ({ navigate, name, location }) => (
  <TouchableOpacity onPress={() => navigate(location)}>
    <View key={name} style={{ padding: 10 }}>
      <Text style={{ fontSize: 18, color: '#676767' }}>{name}</Text>
    </View>
  </TouchableOpacity>
);

export default Row;
