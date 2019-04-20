import React from "react";
import { StyleSheet, View, Image, Platform } from "react-native";
import { Header, Left, Right, Item } from "native-base";

import { BounceButton } from "../components/Buttons";
import { MainText, ButtonText } from "../components/Text";
import { height, width } from "../constants/Layout";

import { getStatusBarHeight } from "react-native-status-bar-height";
const aspectRatio = height / width;

export const GameHeader = props => (
  <Header
    transparent
    style={{
      paddingTop: getStatusBarHeight(),
      height:
        aspectRatio < 1.6
          ? height * 0.13 + getStatusBarHeight()
          : 54 + getStatusBarHeight()
    }}
  >
    <Left style={{ flexDirection: "row" }}>
      <Item
        style={{
          borderColor: "transparent"
        }}
      >
        <View>
          {/* <Image
            source={require("../assets/images/coin.png")}
            style={styles.coinImage}
          /> */}
        </View>
        <View style={{ marginLeft: width * 0.05 }}>
          <MainText>{props.coins}</MainText>
        </View>
      </Item>
    </Left>
    <Right
      style={{
        flexDirection: "row",
        marginTop: Platform.OS === "ios" ? 0 : height * 0.05
      }}
    >
      <BounceButton
        innerStyle={{ height: Platform.OS === "ios" ? null : height * 0.09 }}
        colors={["#00e676", "#64dd17"]}
        onPress={() => {
          props.showHint();
        }}
      >
        <View style={{}}>
          {/* <Image
            source={require("../assets/images/hint.png")}
            style={styles.hintImage}
          /> */}
        </View>
      </BounceButton>
    </Right>
  </Header>
);

const styles = StyleSheet.create({
  coinImage: {
    marginLeft: width * 0.07,
    overflow: "visible",
    height: height * 0.103,
    width: width * 0.181,
    marginTop: Platform.OS === "ios" ? 0 : height * 0.05
  },
  hintImage: {
    marginRight: width * 0.018,
    overflow: "visible",
    height: height * 0.085,
    width: width * 0.2
  }
});
