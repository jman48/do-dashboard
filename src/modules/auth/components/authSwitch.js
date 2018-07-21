import React, { Component } from "react";
import { View, Text } from "native-base";
import { AsyncStorage } from "react-native";

class AuthSwitch extends Component {
  static defaultProps = {
    isAuthenticated: false
  };

  constructor(props) {
    super(props);
    this.handleAuth();
  }

  handleAuth = () => {
    const { isAuthenticated, navigate } = this.props;

    console.log("isAuthenticated: ", isAuthenticated);
    if (isAuthenticated) return navigate("Private");
    return navigate("Public");
  };

  render() {
    return (
      <View>
        <Text>AuthSwitch</Text>
      </View>
    );
  }
}

export default AuthSwitch;
