import React from "react";
import { View, StyleSheet } from "react-native";
import { BounceButton } from "./Buttons";
import { MainText, ButtonText } from "./Text";
import { width } from "../constants/Layout";

export const Question = ({ number1, number2, action, answer, clearField }) => (
  <>
    <View
      style={{
        flexDirection: "row"
      }}
    >
      <MainText
        style={{
          fontSize: width * 0.15
        }}
      >
        {` ${number1} ${action} ${number2} `}
      </MainText>
    </View>
    <MainText
      style={{
        fontSize: width * 0.15
      }}
    >
      {" "}
      ={" "}
    </MainText>

    <View style={styles.box}>
      <MainText style={styles.answerText}>{answer.toString()}</MainText>
    </View>
    <BounceButton onPress={() => clearField()}>
      <ButtonText> Clear </ButtonText>
    </BounceButton>
  </>
);

const styles = StyleSheet.create({
  box: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: width * 0.04,
    width: width * 0.5,
    height: width * 0.17,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 1
  },
  answerText: {
    fontSize: width * 0.15,
    paddingHorizontal: width * 0.01,
    marginBottom: width * 0.01
  }
});
