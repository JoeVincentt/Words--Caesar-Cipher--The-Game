import React, { Component } from "react";
import { Container } from "native-base";
import { LinearGradient } from "expo";

export default class StyledView extends Component {
  render() {
    return (
      <Container>
        <LinearGradient
          colors={["#388e3c", "#43a047", "#4caf50", "#43a047", "#388e3c"]}
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
