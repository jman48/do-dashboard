import React from "react";
import { Modal } from "react-native";
import { View, Text } from "native-base";
import { SafeAreaView } from "react-navigation";

const authError = ({ message, error }) => (
  <View>
    {error && (
      <SafeAreaView style={styles.wrapper}>
        <Text style={styles.text}>{message}</Text>
      </SafeAreaView>
    )}
  </View>
);

const styles = {
  wrapper: {
    backgroundColor: "#EDDF59",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0
  },
  text: {
    textAlign: "center",
    padding: 20
  }
};

export default authError;
