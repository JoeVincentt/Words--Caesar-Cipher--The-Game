import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation";
import LandingScreen from "../screens/LandingScreen";
import GameScreen from "../screens/GameScreen";

export default (GameStack = createStackNavigator(
  {
    Landing: LandingScreen,
    Game: GameScreen
  },
  {
    headerMode: "none",
    initialRouteName: "Landing"
  }
));
