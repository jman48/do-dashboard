import React from 'react';
import { View, Text, Button } from 'native-base';

const Setting = ({ name }) => (
  <View>
    <Button block style={styles.wrapper}>
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
