import React, { Component } from "react";

import StyledView from "../components/StyledView";
import { Container, Button } from "native-base";
import { View, StyleSheet, Image, ImageBackground } from "react-native";
import { BounceButton } from "../components/Buttons";
import { GameConsumer } from "../context/GameContext";
import { MainText, ButtonText } from "../components/Text";
import { height, width } from "../constants/Layout";
import { _shuffle } from "../utils/shuffle";
import {
  _cryptedWordMap,
  _pickedWordMap,
  _originalWordMap
} from "../components/renderGameFunc";
import { AbsShift } from "../components/AbsShift";

import { _caesarCipher } from "../crypto";
const words = require("an-array-of-english-words");
// const words = ["hello", "eco", "quest"];

export default class GameScreen extends Component {
  state = {
    caesarShift: "",
    pickedWord: "",
    cryptedWord: "",
    pickedWordToMap: [],
    cryptedWordToMap: [],
    wordMap: [],
    indexToCheck: 0,
    prevWordIndex: []
  };

  componentDidMount() {
    this.loadSipher();
  }

  randomNumberInRange = (maximum, minimum) => {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  };

  loadSipher = async () => {
    const caesarShift = this.randomNumberInRange(1, 26);
    let pickedWord = words[this.randomNumberInRange(0, 274918)];
    if (pickedWord.length >= 10) {
      return this.loadSipher();
    }
    const cryptedWord = _caesarCipher(pickedWord, caesarShift);
    const cryptedWordToMap = cryptedWord.split("");
    const wordMap = pickedWord.split("");
    let pickedWordToMap = pickedWord.split("");
    pickedWordToMap = _shuffle(pickedWordToMap);
    await this.setState({
      caesarShift,
      pickedWord,
      cryptedWord,
      pickedWordToMap,
      cryptedWordToMap,
      wordMap
    });
    console.log(
      this.state.caesarShift,
      this.state.pickedWord,
      this.state.cryptedWord,
      this.state.pickedWordToMap,
      this.state.cryptedWordToMap,
      this.state.wordMap
    );
  };

  checkLetter = async letter => {
    if (this.state.wordMap[this.state.indexToCheck] === letter) {
      console.log("succes");
      await this.setState({ indexToCheck: this.state.indexToCheck + 1 });
    } else {
      console.log("wrong");
    }
    if (this.state.wordMap.length === this.state.indexToCheck) {
      console.log("endGame");
      setTimeout(async () => {
        await this.setState({ indexToCheck: 0 });
        this.loadSipher();
      }, 800);
    }
  };

  render() {
    const {
      wordMap,
      indexToCheck,
      cryptedWordToMap,
      pickedWordToMap,
      caesarShift
    } = this.state;
    return (
      <StyledView>
        <GameConsumer>
          {context => (
            <View
              ref={ref => {
                this.context = context;
              }}
              style={styles.mainBox}
            >
              <ImageBackground
                source={require("../assets/images/laurel.png")}
                imageStyle={styles.imageBackgroundImageStyle}
                style={styles.imageBackgroundStyle}
              >
                <AbsShift caesarShift={caesarShift} />
                <View
                  style={{
                    margin: width * 0.05,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: width * 0.9
                  }}
                >
                  <View>
                    <ButtonText> Score: 5/10 </ButtonText>
                  </View>
                  <View>
                    <ButtonText> lvl 1 </ButtonText>
                  </View>
                  <View>
                    <ButtonText> 10 life </ButtonText>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "flex-start",
                    alignItems: "center"
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      borderBottomColor: "#fbc02d",
                      borderBottomWidth: 3
                    }}
                  >
                    {_originalWordMap(wordMap, indexToCheck)}
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    {_cryptedWordMap(cryptedWordToMap)}
                  </View>
                  <View style={styles.pickedWordMap}>
                    {_pickedWordMap(pickedWordToMap, this.checkLetter)}
                  </View>
                </View>
              </ImageBackground>
            </View>
          )}
        </GameConsumer>
      </StyledView>
    );
  }
}

const styles = StyleSheet.create({
  mainBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageBackgroundImageStyle: {
    shadowColor: "black",
    shadowRadius: 3,
    shadowOpacity: 0.3
  },
  imageBackgroundStyle: {
    resizeMode: "contain",
    width: width,
    height: height,
    justifyContent: "flex-start",
    alignItems: "center",
    elevation: 1,
    marginTop: height * 0.1
  },
  pickedWordMap: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.8
  }
});
