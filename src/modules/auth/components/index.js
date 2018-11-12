import React, { Component } from "react";
import { Linking, TextInput } from "react-native";
import { Container, Form, Item, Input, View, Button, Text } from "native-base";
import { SafeAreaView } from "react-navigation";
import analytics from "../../core/utils/analytics";
import AuthError from "../containers/authError";

class Auth extends Component {
  constructor() {
    super();
    console.log("Auth page");
    this.state = {
      token: ""
    };
  }

  componentDidMount() {
    analytics.setCurrentScreen("auth");
  }

  render() {
    const { authenticate } = this.props;
    const { token } = this.state;

    return (
      <Container style={styles.wrapper}>
          <AuthError message="Invalid API Key" />
          <View style={styles.login}>
            <Text style={styles.title}>Digital Ocean Mobile Dashboard</Text>

            <View style={styles.content}>
              <Form>
                <Item regular style={{ borderColor: "transparent" }}>
                  <Input
                    placeholder="Enter API Key..."
                    onChangeText={newToken =>
                      this.setState({ token: newToken })
                    }
                    value={token}
                    style={{
                      backgroundColor: "white",
                      borderRadius: 5,
                      marginBottom: 10
                    }}
                  />
                </Item>

                <Button
                  block
                  onPress={() => authenticate(token)}
                  style={styles.submit}
                >
                  <Text>Start</Text>
                </Button>
              </Form>

              <View style={{ marginTop: 40 }}>
                <Text style={styles.text}>
                  You can create an API key from Digital Ocean
                </Text>
                <Text
                  style={[styles.text, { color: "blue" }]}
                  onPress={() =>
                    Linking.openURL(
                      "https://cloud.digitalocean.com/settings/applications"
                    )
                  }
                >
                  https://cloud.digitalocean.com/settings/applications
                </Text>
              </View>
            </View>
          </View>
      </Container>

    );
  }
}

const styles = {
  wrapper: {
    backgroundColor: "#136EFB"
  },
  login: {
    flex: 1,
    justifyContent: "center"
  },
  content: {
    padding: 10,
    paddingTop: 35,
    paddingBottom: 35,
    marginTop: 20,
    marginBottom: 20
  },
  title: {
    color: "white",
    textAlign: "center",
    fontSize: 38,
    // marginTop: 50,
    marginBottom: 50,
    fontWeight: "600"
  },
  header: {
    color: "#444444",
    fontSize: 28,
    textAlign: "center",
    marginBottom: 30,
    fontWeight: "300"
  },
  submit: {
    backgroundColor: "#29CC75"
  },
  text: {
    textAlign: "center",
    color: "white"
  }
};

export default Auth;
