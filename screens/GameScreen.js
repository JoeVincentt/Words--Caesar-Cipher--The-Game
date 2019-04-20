import React, { Component } from "react";

import StyledView from "../components/StyledView";
import { Container, Button } from "native-base";
import { View, StyleSheet } from "react-native";
import { BounceButton } from "../components/Buttons";
import { MainText, ButtonText } from "../components/Text";
import { height, width } from "../constants/Layout";

export default class GameScreen extends Component {
  render() {
    return (
      <StyledView>
        <BounceButton
          style={styles.bounceBase}
          innerStyle={styles.bounceInner}
          onPress={() => {}}
        >
          <ButtonText> 3 </ButtonText>
        </BounceButton>
      </StyledView>
    );
  }
}

const styles = StyleSheet.create({
  bounceBase: {
    height: height * 0.07,
    width: width * 0.15,
    marginVertical: height * 0.004,
    marginHorizontal: width * 0.014
  },
  bounceInner: {
    height: height * 0.07,
    width: width * 0.15
  },
  numbersRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});
