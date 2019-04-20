import React, { Component } from "react";
import { Container } from "native-base";
import { LinearGradient } from "expo";

export default class StyledView extends Component {
  render() {
    return (
      <Container>
        <LinearGradient
          colors={["#212121", "#000000", "#212121", "#000000", "#212121"]}
          style={{
            flex: 1,
            padding: 0
          }}
        >
          {this.props.children}
        </LinearGradient>
      </Container>
    );
  }
}
