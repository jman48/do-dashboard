import React from 'react';
import { View, Text, Button } from 'native-base';

const Setting = ({ name, onActivate, disabled }) => (
  <View>
    <Button disabled={disabled} block style={styles.wrapper} onPress={() => onActivate()}>
      <Text>{name}</Text>
    </Button>
  </View>
);

const styles = {
  wrapper: {
    margin: 10
  }
};

export default Setting;
