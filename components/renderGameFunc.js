import React, { Component } from "react";

import StyledView from "./StyledView";
import { Container, Button } from "native-base";
import { View, StyleSheet } from "react-native";
import { BounceButton } from "./Buttons";
import { MainText, ButtonText } from "./Text";
import { height, width } from "../constants/Layout";

export const _pickedWordMap = (pickedWordToMap, checkLetter) => {
  if (pickedWordToMap !== []) {
    let letters = [];
    return pickedWordToMap.map((letter, i) => {
      if (letters.indexOf(letter) === -1) {
        letters = letters.concat(letter);
        return (
          <BounceButton
            key={i}
            style={styles.bounceBase}
            innerStyle={styles.bounceInner}
            onPress={() => {
              checkLetter(letter);
            }}
          >
            <ButtonText> {letter} </ButtonText>
          </BounceButton>
        );
      } else {
        return <View key={i} />;
      }
    });
  }
};

export const _cryptedWordMap = cryptedWordToMap => {
  if (cryptedWordToMap !== []) {
    return cryptedWordToMap.map((letter, i) => (
      <View
        key={i}
        style={[
          // styles.bounceBase,
          { justifyContent: "center", alignItems: "center" }
        ]}
      >
        <MainText
          style={{
            fontSize: height * 0.06,
            color: "#fb8c00",
            marginHorizontal: width * 0.01
          }}
        >
          {letter}
        </MainText>
      </View>
    ));
  }
};

export const _originalWordMap = (wordMap, indexToCheck) => {
  if (wordMap !== []) {
    return wordMap.map((letter, i) => (
      <View
        key={i}
        style={[
          // styles.bounceBase,
          { justifyContent: "center", alignItems: "center" }
        ]}
      >
        {indexToCheck > i ? (
          <MainText
            style={{
              fontSize: height * 0.06,
              color: "#fbc02d",
              marginHorizontal: width * 0.01
            }}
          >
            {letter}
          </MainText>
        ) : (
          <MainText
            style={{
              fontSize: height * 0.06,
              color: "#ffff00",
              marginHorizontal: width * 0.01
            }}
          >
            ?
          </MainText>
        )}
      </View>
    ));
  }
};

const styles = StyleSheet.create({
  bounceBase: {
    justifyContent: "center",
    alignItems: "center",
    height: height * 0.07,
    width: width * 0.14,
    marginVertical: height * 0.004,
    marginHorizontal: width * 0.014
  },
  bounceInner: {
    height: height * 0.07,
    width: width * 0.14
  },
  numbersRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});
