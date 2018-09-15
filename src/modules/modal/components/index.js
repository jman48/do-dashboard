import React from "react";
import { Modal } from "react-native";
import { View, Text } from "native-base";

const modal = ({ open, message }) => (
  <Modal transparent visible={open} animationType="fade" style={styles.wrapper}>
    <View style={styles.content}>
      <Text style={styles.message}>{message}</Text>
    </View>
  </Modal>
);

const styles = {
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    marginTop: 50,
    padding: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'red',
    backgroundColor: 'white',
  },
  message: {
    color: 'red'
  }
};

export default modal;
