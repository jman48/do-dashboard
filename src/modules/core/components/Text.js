import React from 'react';
import { Text } from 'react-native';

const LightText = ({ children }) => (
  <Text style={styles}>{children}</Text>
);

const styles = {
  color: '#676767',
  fontSize: 16
};

export default LightText;
