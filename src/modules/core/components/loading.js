import React from 'react';
import { View, Spinner } from 'native-base';

const loading = ({ state }) => {
  if (state) {
    return (
      <View style={style.wrapper}>
        <Spinner color="#1683FB" />
      </View>
    );
  }

  return null;
};

const style = {
  wrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  }
};

export default loading;
