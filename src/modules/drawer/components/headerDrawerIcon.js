import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

const HeaderDrawerIcon = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.wrapper}>
    <Icon style={styles.menu} name="menu" />
  </TouchableOpacity>
);

const styles = {
  wrapper: { marginRight: 10 },
  menu: {
    color: 'white'
  }
};

export default HeaderDrawerIcon;
