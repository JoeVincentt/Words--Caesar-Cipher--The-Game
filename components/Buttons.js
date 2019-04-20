import React, { Component } from "react";

import {
  StyleSheet,
  Text,
  Animated,
  Easing,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { LinearGradient } from "expo";

export const BounceButton = props => {
  const colors = ["#ffea00", "#fbc02d"];

  var scaleValue = new Animated.Value(0);
  function scale() {
    scaleValue.setValue(0);
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 300,
      easing: Easing.easeOutBack
    }).start(() => props.onPress());
  }
  function onPress() {
    scale();
  }
  function getContent() {
    return props.children;
  }
  const buttonScale = scaleValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 1.3, 1]
  });

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.button, props.style]}>
        <Animated.View
          style={[
            {
              transform: [{ scale: buttonScale }]
            }
          ]}
        >
          <LinearGradient
            colors={props.colors ? props.colors : colors}
            style={{ borderRadius: 5 }}
          >
            <View
              style={[
                props.innerStyle ? props.innerStyle : "",
                styles.default_button
              ]}
            >
              {getContent()}
            </View>
          </LinearGradient>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  default_button: {
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    borderRadius: 5,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 1
  }
});
