import React, { Component } from 'react';
import { Content, Text, View, List, Badge, Footer, FooterTab, Button } from 'native-base';
import Status from './status';
import ListItem from './listItem';
import { getDropletInfo } from '../utils';
import Loading from '../../core/components/loading';
import analytics from '../../core/utils/analytics';
import Error from '../../core/components/error';
import Title from '../../core/components/title';

class Droplet extends Component {
  static navigationOptions = {
    title: 'Info'
  };

  componentDidMount() {
    analytics.setCurrentScreen('droplet');
  }

  render() {
    const { droplet, loading, error, showDroplet } = this.props;
    const {
      name,
      memory,
      disk,
      vcpus,
      status,
      region,
      tags,
      image: { distribution }
    } = getDropletInfo(droplet);

    return (
      <Content>
        <Loading state={loading} />
        <Error show={error} message="Failed to load droplet. Please try again later" />
        {showDroplet && (
          <View>
            <List>
              <Title>{name}</Title>

              <ListItem>
                <Text>Status</Text>
                <Status status={status} />
              </ListItem>

              <ListItem>
                <Text>CPUs</Text>
                <Text>{vcpus}</Text>
              </ListItem>

              <ListItem>
                <Text>Memory</Text>
                <Text>{memory / 1024} GB</Text>
              </ListItem>

              <ListItem>
                <Text>Disk</Text>
                <Text>{disk} GB Disk</Text>
              </ListItem>

              <ListItem>
                <Text>Region</Text>
              </ListItem>

              <ListItem>
                <Text>OS</Text>
                <Text>{distribution}</Text>
              </ListItem>

              <ListItem>
                <Text>Tags</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    flexWrap: 'wrap'
                  }}
                >
                  {tags.map(tag => (
                    <Badge
                      style={{
                        backgroundColor: 'grey',
                        flexDirection: 'column',
                        marginLeft: 2,
                        marginRight: 2
                      }}
                      key={tag}
                    >
                      <Text>{tag}</Text>
                    </Badge>
                  ))}
                </View>
              </ListItem>
            </List>
          </View>
        )}
      </Content>
    );
  }
}

const styles = {
  status: {
    position: 'absolute',
    top: 0,
    left: 0
  }
};

export default Droplet;
