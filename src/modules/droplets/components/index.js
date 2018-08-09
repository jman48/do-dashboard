import React, { Component } from "react";
import { FlatList } from "react-native";
import Droplet from "../containers/dropletSummary";
import { Container, Content, View, Text } from "native-base";
import Loading from "../../core/components/loading";
import Error from "../../core/components/error";

class Droplets extends Component {
  static navigationOptions = {
    title: "Droplets"
  };

  constructor(props) {
    super();
    const { load } = props;
    load();
  }

  render() {
    const { droplets, loading, error } = this.props;
    const showDroplets = !loading && !error;

    return (
      <Container>
        <Content
          style={{
            margin: 5
          }}
        >
          <Loading state={loading} />
          <Error
            show={error}
            message="Error loading droplets. Please try again later"
          />
          {showDroplets && (
            <FlatList
              data={droplets}
              renderItem={({ item }) => (
                <Droplet key={item.id} droplet={item} />
              )}
            />
          )}
        </Content>
      </Container>
    );
  }
}

export default Droplets;
