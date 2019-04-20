import React, { Component } from "react";
import { View, StyleSheet, Image, ImageBackground } from "react-native";
import { MainText, ButtonText } from "../components/Text";
import { height, width } from "../constants/Layout";

export const AbsShift = ({ caesarShift }) => (
  <View style={styles.shiftTextBox}>
    <ButtonText style={[styles.shiftTextStyle]}> S h i f t </ButtonText>
    <MainText
      style={[
        styles.shiftTextStyle,
        { fontSize: 50, marginBottom: height * 0.01 }
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
    width: width * 0.8,
    height: height * 0.05,
    shadowColor: "black",
    shadowRadius: 4,
    shadowOpacity: 0.4
  }
});
