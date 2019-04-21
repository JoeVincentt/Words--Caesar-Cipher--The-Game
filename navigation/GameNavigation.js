import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation";
import LandingScreen from "../screens/LandingScreen";

export default (GameStack = createStackNavigator(
  {
    Landing: LandingScreen
  },
  {
    headerMode: "none",
    initialRouteName: "Landing"
  }
));
