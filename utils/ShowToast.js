import React, { Component } from "react";
import { Toast } from "native-base";
import { ButtonText } from "../components/Text";

export const _showToast = (maintext, duration, type, color, position) => {
  Toast.show({
    text: <ButtonText> {maintext}</ButtonText>,
    duration: duration,
    position: position ? position : "bottom",
    type: type ? type : "",
    style: color
      ? {
          backgroundColor: color
        }
      : {}
  });
};
