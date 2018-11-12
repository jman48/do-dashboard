import React from "react";
import { Text } from "native-base";

const title = ({ children }) => <Text style={styles.title}>{children}</Text>;

const styles = {
  title: {
    color: "#1683FB",
    fontSize: 24,
    fontWeight: '300',
    textAlign: "center",
    marginTop: 15,
    marginBottom: 30
  }
};

export default title;
