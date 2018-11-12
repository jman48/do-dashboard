import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { Card, CardItem, Body, Text, View } from "native-base";
import { Row, Grid } from "react-native-easy-grid";
import analytics from "../../core/utils/analytics";
import Status from "./status";

class Place extends Component {
  componentDidMount() {
    analytics.setCurrentScreen("droplets");
  }

  render() {
    const {
      droplet: {
        id,
        name,
        memory,
        vcpus,
        disk,
        status,
        region: { slug }
      },
      loadDroplet
    } = this.props;
    const { title, info } = styles;

    return (
      <Card>
        <CardItem>
          <Body style={{ marginTop: 2, marginBottom: 2 }}>
            <TouchableOpacity
              style={{ width: "100%" }}
              onPress={() => loadDroplet(id)}
            >
              <Grid style={{ width: "100%" }}>
                <Row>
                  <Text style={title}>{name}</Text>
                </Row>

                <Row style={{ marginTop: 5 }}>
                  <View style={styles.status}>
                    <Status status={status} />
                  </View>
                  <Text style={info}>
                    {memory / 1024}GB / {disk}GB Disk / {vcpus} vcpus /{" "}
                    {slug.toUpperCase()}
                  </Text>
                </Row>
              </Grid>
            </TouchableOpacity>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

const styles = {
  title: {
    color: "#1683FB",
    fontSize: 18
  },
  info: {
    color: "#999999",
    fontSize: 15
  },
  status: {
    alignSelf: "center",
    marginRight: 5
  }
};

export default Place;
