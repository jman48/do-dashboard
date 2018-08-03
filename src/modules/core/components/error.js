import React from "react";
import { View, Text } from "native-base";

const error = ({ message, show }) => {
  if (show)
    return (
      <View style={styles.wrapper}>
        <Text style={styles.text}>{message}</Text>
      </View>
    );

  return null;
};

const styles = {
  wrapper: {
    marginTop: 5
  },
  text: {
    textAlign: "center"
  }
};

export default error;
