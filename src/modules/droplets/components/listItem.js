import React from 'react';
import { ListItem, Text } from 'native-base';

const listItem = ({ children }) => (
  <ListItem
    style={{
      justifyContent: 'space-between'
    }}
  >
    {children}
  </ListItem>
);

export default listItem;
