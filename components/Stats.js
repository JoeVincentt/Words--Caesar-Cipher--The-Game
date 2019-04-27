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

export const Stats = ({ score, lvl, tries }) => (
  <View
    style={{
      margin: width * 0.03,
      flexDirection: "row",
      justifyContent: "space-evenly",
      width: width
    }}
  >
    <View>
      <ButtonText style={{ color: "#fbc02d" }}> Score: {score}/5 </ButtonText>
    </View>
    <View>
      <ButtonText style={{ color: "#fbc02d" }}> lvl {lvl} </ButtonText>
    </View>
    <View>
      <ButtonText style={{ color: "#fbc02d" }}> {tries} tries </ButtonText>
    </View>
  </View>
);
