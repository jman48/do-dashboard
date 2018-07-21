import React, { Component } from 'react';
import { Content, Text, View, List, Badge } from 'native-base';
import Status from './status';
import ListItem from './listItem';
import { getDropletInfo } from '../utils';
import Loading from '../../core/components/loading';
import analytics from '../../core/utils/analytics';

class Droplet extends Component {
  static navigationOptions = {
    title: 'Droplet'
  };

  componentDidMount() {
    analytics.setCurrentScreen('droplet');
  }

  render() {
    const { droplet, loading } = this.props;
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
    const { title, info } = styles;
    console.log('Droplet is: ', droplet);

    return (
      <Content>
        <Loading state={loading} />
        {!loading && (
          <View>
            <List>
              <Text style={title}>{name}</Text>

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
                <Text>{region.slug.toUpperCase()}</Text>
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
  title: {
    color: '#1683FB',
    fontSize: 24,
    textAlign: 'center',
    margin: 15
  },
  info: {
    color: '#999999'
  },
  status: {
    position: 'absolute',
    top: 0,
    left: 0
  }
};

export default Droplet;