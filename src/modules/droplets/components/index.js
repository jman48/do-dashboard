import React, { Component } from 'react';
import Droplet from '../containers/dropletSummary';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  View,
  Button,
  Text
} from 'native-base';
import Loading from '../../core/components/loading';

class Droplets extends Component {
  static navigationOptions = {
    title: 'Droplets'
  };

  constructor(props) {
    super();
    console.log('Starting to load......');
    const { load } = props;
    load();
  }

  render() {
    const { droplets, loading } = this.props;

    return (
      <Container>
        <Content
          style={{
            margin: 5
          }}
        >
          <Loading state={loading} />
          {!loading && (
            <View style={{ flex: 1, justifyContent: 'center' }}>
              {droplets.map(droplet => (
                <Droplet key={droplet.id} droplet={droplet} />
              ))}
            </View>
          )}
        </Content>
      </Container>
    );
  }
}

export default Droplets;
