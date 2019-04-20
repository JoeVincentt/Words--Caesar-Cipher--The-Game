import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";
import { height, width } from "../constants/Layout";

export const ButtonText = props => (
  <Text style={[styles.buttonText, props.style]}>{props.children}</Text>
);

export const MainText = props => (
  <Text style={[styles.mainText, props.style]}>{props.children}</Text>
);

const styles = StyleSheet.create({
  buttonText: {
    fontFamily: "bangers",
    fontSize: width * 0.07,
    shadowColor: "gray",
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 1
  },
  mainText: {
    fontFamily: "Fredoka_One",
    fontSize: width * 0.07,
    shadowColor: "gray",
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 1
  }
});
