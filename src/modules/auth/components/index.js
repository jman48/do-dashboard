import React, { Component } from 'react';
import { Linking } from 'react-native';
import { Container, Form, Item, Input, View, Button, Text } from 'native-base';
import analytics from '../../core/utils/analytics';
import Loading from '../../core/components/loading';

class Auth extends Component {
  static navigationOptions = {
    title: 'Digital Ocean Control App'
  };

  constructor() {
    super();
    this.state = {
      token: ''
    };
  }

  async componentWillMount() {
    const { checkAuth, goToApp } = this.props;
    const auth = await checkAuth();

    if (auth) goToApp();
  }

  componentDidMount() {
    analytics.setCurrentScreen('auth');
  }

  render() {
    const { saveToken, loading } = this.props;
    const { token } = this.state;

    return (
      <Container style={styles.wrapper}>
        <Text style={styles.title}>Digital Ocean Mobile Dashboard</Text>

        <View style={styles.content}>
          <Text style={styles.header}>Log In</Text>
          <Form>
            <Item regular style={styles.item}>
              <Input
                placeholder="Enter API Key..."
                onChangeText={newToken => this.setState({ token: newToken })}
                value={token}
              />
            </Item>

            <Button
              block
              onPress={() => saveToken(token)}
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
              style={[styles.text, { color: 'blue' }]}
              onPress={() =>
                Linking.openURL(
                  'https://cloud.digitalocean.com/settings/applications'
                )
              }
            >
              https://cloud.digitalocean.com/settings/applications
            </Text>
          </View>
        </View>
      </Container>
    );
  }
}

const styles = {
  wrapper: {
    backgroundColor: '#136EFB',
    flex: 1,
    justifyContent: 'center'
  },
  content: {
    backgroundColor: 'white',
    padding: 10,
    paddingTop: 35,
    paddingBottom: 35,
    marginTop: 20,
    marginBottom: 20
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 38,
    // marginTop: 50,
    marginBottom: 50,
    fontWeight: '600'
  },
  header: {
    color: '#444444',
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: '300'
  },
  item: {
    margin: 10
  },
  submit: {
    backgroundColor: '#29CC75'
  },
  text: {
    textAlign: 'center'
  }
};

export default Auth;
