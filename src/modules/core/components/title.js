import React from "react";
import { Text } from "native-base";

const title = ({ children }) => <Text style={styles.title}>{children}</Text>;

const styles = {
  title: {
    color: "#1683FB",
    fontSize: 24,
    textAlign: "center",
    margin: 15
  }
};

export default title;
