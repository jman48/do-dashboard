import React, { Component } from 'react';
import Droplet from '../containers/dropletSummary';
import {
  Container,
  Content,
  View,
  Text
} from 'native-base';
import Loading from '../../core/components/loading';
import Error from '../../core/components/error';

class Droplets extends Component {
  static navigationOptions = {
    title: 'Droplets'
  };

  constructor(props) {
    super();
    const { load } = props;
    load();
  }

  render() {
    const { droplets, loading, error, showDroplets } = this.props;

    return (
      <Container>
        <Content
          style={{
            margin: 5
          }}
        >
          <Loading state={loading} />
          <Error show={error} message="Error loading droplets. Please try again later" />
          {showDroplets && (
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
