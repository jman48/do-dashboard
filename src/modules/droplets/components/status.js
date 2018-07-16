import React from 'react';
import { View } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Status = ({ status }) => (
    <Icon style={styles.icon} name="checkbox-blank-circle" />
);

const styles = {
  icon: {
    color: '#29CC75',
  },
};

export default Status;
