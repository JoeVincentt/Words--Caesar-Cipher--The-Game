import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Platform
} from "react-native";
import { MainText, ButtonText } from "../components/Text";
import { height, width } from "../constants/Layout";

export const AbsShift = ({ caesarShift }) => (
  <View style={styles.shiftTextBox}>
    <ButtonText style={[styles.shiftTextStyle]}> S h i f t </ButtonText>
    <MainText
      style={[
        styles.shiftTextStyle,
        { fontSize: height * 0.04, marginBottom: height * 0.01 }
      ]}
    >
      {caesarShift}
    </MainText>
    <Image
      source={require("../assets/images/alphabet.png")}
      style={styles.alphabetImageStyle}
    />
  </View>
);

const styles = StyleSheet.create({
  shiftTextBox: {
    justifyContent: "center",
    alignItems: "center"
  },
  shiftTextStyle: {
    color: "#fbc02d",
    shadowColor: "black",
    shadowRadius: 3,
    shadowOpacity: 0.3
  },
  alphabetImageStyle: {
    marginBottom: height * 0.01,
    width: 300,
    height: 41,
    shadowColor: "black",
    shadowRadius: 4,
    shadowOpacity: 0.4
  }
});
