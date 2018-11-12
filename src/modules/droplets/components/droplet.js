import React, { Component } from "react";
import {
  Content,
  Text,
  View,
  List,
  Badge
} from "native-base";
import Status from "./status";
import ListItem from "./listItem";
import { getDropletInfo } from "../utils";
import Loading from "../../core/components/loading";
import analytics from "../../core/utils/analytics";
import Error from "../../core/components/error";
import Title from "../../core/components/title";
import LightText from '../../core/components/Text';

class Droplet extends Component {
  static navigationOptions = {
    title: "Info"
  };

  componentDidMount() {
    analytics.setCurrentScreen("droplet");
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
      <Content
        style={{ backgroundColor: "white", paddingLeft: 5, paddingRight: 5 }}
      >
        <Loading state={loading} />
        <Error
          show={error}
          message="Failed to load droplet. Please try again later"
        />
        {showDroplet && (
          <View>
          <View>
            <Title>{name}</Title>
          </View>
            <List>
              <ListItem>
                <LightText>Status</LightText>
                <View style={{ flexWrap: "nowrap" }}>
                  <LightText>
                    {status}
                    <View style={{ paddingLeft: 5 }}>
                      <Status status={status} />
                    </View>
                  </LightText>
                </View>
              </ListItem>

              <ListItem>
                <LightText>CPUs</LightText>
                <LightText>{vcpus}</LightText>
              </ListItem>

              <ListItem>
                <LightText>Memory</LightText>
                <LightText>{memory / 1024} GB</LightText>
              </ListItem>

              <ListItem>
                <LightText>Disk</LightText>
                <LightText>{disk} GB Disk</LightText>
              </ListItem>

              <ListItem>
                <LightText >Region</LightText>
              </ListItem>

              <ListItem>
                <LightText>OS</LightText>
                <LightText>{distribution}</LightText>
              </ListItem>

              <ListItem>
                <LightText>Tags</LightText>
                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap"
                  }}
                >
                  {tags.map(tag => (
                    <Badge
                      style={{
                        backgroundColor: "#F1F1F1",
                        margin: 2
                      }}
                      key={tag}
                    >
                      <Text style={[styles.text, { color: "#676767" }]}>{tag}</Text>
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
    position: "absolute",
    top: 0,
    left: 0
  }
};

export default Droplet;
