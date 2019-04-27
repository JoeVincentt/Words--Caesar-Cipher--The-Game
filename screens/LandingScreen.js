import React, { Component } from "react";

import StyledView from "../components/StyledView";
import { Spinner } from "native-base";
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Platform,
  TouchableOpacity
} from "react-native";
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
import { Stats } from "../components/Stats";
import { _caesarCipher } from "../utils/crypto";
import HowToPlayModal from "../components/HowtoplayModal";
import { soundPlay } from "../utils/soundPlay";
import { _showToast } from "../utils/ShowToast";
import AdmobBanner from "../utils/showAdmobBanner";
const words = require("an-array-of-english-words");

//Save and retrieve data from local storage
const saveDataToSecureStorage = async (key, item) =>
  await Expo.SecureStore.setItemAsync(key, JSON.stringify(item));

const retrieveDataFromSecureStorage = async key =>
  await Expo.SecureStore.getItemAsync(key);

export default class GameScreen extends Component {
  state = {
    caesarShift: "",
    pickedWord: "",
    cryptedWord: "",
    pickedWordToMap: [],
    cryptedWordToMap: [],
    wordMap: [],
    indexToCheck: 0,
    prevWordIndex: [],
    tries: 3,
    lvl: 1,
    score: 0,
    howToPlayModal: true,
    loadingWord: false,
    hints: 2
  };

  componentDidMount() {
    this.loadSipher();
  }
  async componentWillMount() {
    let lvl = await retrieveDataFromSecureStorage("CaesarCipherGameLvl");
    if (lvl !== null) {
      lvl = Number(JSON.parse(lvl));
      this.setState({ lvl });
    }
    let score = await retrieveDataFromSecureStorage("CaesarCipherGameScore");
    if (score !== null) {
      score = Number(JSON.parse(score));
      this.setState({ score });
    }
  }

  closeModal = () => {
    soundPlay(require("../assets/sounds/click.wav"));
    this.setState({ howToPlayModal: false });
  };

  returnMaxNumber = lvl => {
    if (lvl <= 26) {
      return Number(lvl);
    } else {
      return 26;
    }
  };

  randomNumberInRange = (maximum, minimum) => {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  };

  loadSipher = async () => {
    this.setState({ loadingWord: true });
    const maxNumber = await this.returnMaxNumber(this.state.lvl);
    const caesarShift = await this.randomNumberInRange(1, maxNumber);
    let pickedWord = words[this.randomNumberInRange(0, 274918)];
    console.log(pickedWord);
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
      wordMap,
      loadingWord: false,
      indexToCheck: 0,
      tries: 3,
      hints: 2
    });
    // console.log(this.state.pickedWord);
  };

  checkLetter = async letter => {
    if (this.state.wordMap[this.state.indexToCheck] === letter) {
      soundPlay(require("../assets/sounds/success.wav"));
      _showToast(" Great! ", 800, "success", "green");
      await this.setState({ indexToCheck: this.state.indexToCheck + 1 });
    } else {
      soundPlay(require("../assets/sounds/wrong.wav"));
      _showToast(" please Try again! ", 800, "success", "red");
      await this.setState({ tries: this.state.tries - 1 });
      if (this.state.tries < 0) {
        soundPlay(require("../assets/sounds/wrong.wav"));
        _showToast(" please try another word ", 2000, "danger", "red");
        this.loadSipher();
      }
    }
    if (this.state.wordMap.length === this.state.indexToCheck) {
      soundPlay(require("../assets/sounds/success.wav"));
      _showToast(" Good Job! ", 2000, "success", "green");
      setTimeout(async () => {
        await this.setState({ score: this.state.score + 1 });
        saveDataToSecureStorage("CaesarCipherGameScore", this.state.score);
        if (this.state.score === 5) {
          await this.setState({ lvl: this.state.lvl + 1, score: 0 });
          saveDataToSecureStorage("CaesarCipherGameLvl", this.state.lvl);
          saveDataToSecureStorage("CaesarCipherGameScore", this.state.score);
        }
        this.loadSipher();
      }, 800);
    }
  };

  getHint = async () => {
    soundPlay(require("../assets/sounds/hint.wav"));
    await this.setState({
      indexToCheck: this.state.indexToCheck + 1,
      hints: this.state.hints - 1
    });
    if (this.state.wordMap.length === this.state.indexToCheck) {
      _showToast(" Good Job! ", 2000, "success", "green");
      return setTimeout(async () => {
        await this.setState({ score: this.state.score + 1 });
        saveDataToSecureStorage("CaesarCipherGameScore", this.state.score);
        if (this.state.score === 5) {
          await this.setState({ lvl: this.state.lvl + 1, score: 0 });
          saveDataToSecureStorage("CaesarCipherGameLvl", this.state.lvl);
          saveDataToSecureStorage("CaesarCipherGameScore", this.state.score);
        }
        this.loadSipher();
      }, 800);
    }
    if (this.state.hints === 0) {
      soundPlay(require("../assets/sounds/wrong.wav"));
      _showToast(" no more hints left ", 1500, "warning", "orange");
    }
  };

  render() {
    const {
      wordMap,
      indexToCheck,
      cryptedWordToMap,
      pickedWordToMap,
      caesarShift,
      score,
      lvl,
      tries,
      hints,
      howToPlayModal,
      loadingWord
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
                <Stats lvl={lvl} tries={tries} score={score} />
                <View
                  style={{
                    flex: 1,
                    justifyContent: "flex-start",
                    alignItems: "center"
                  }}
                >
                  {loadingWord ? (
                    <View style={styles.questionBox}>
                      <Spinner />
                    </View>
                  ) : (
                    <View style={styles.questionBox}>
                      <View style={styles.originalWordBox}>
                        {_originalWordMap(wordMap, indexToCheck)}
                      </View>
                      <View style={styles.cryptedWordBox}>
                        {_cryptedWordMap(cryptedWordToMap)}
                      </View>
                    </View>
                  )}

                  <View style={styles.pickedWordMap}>
                    {_pickedWordMap(pickedWordToMap, this.checkLetter)}
                  </View>
                </View>
                {hints !== 0 ? (
                  <TouchableOpacity onPress={() => this.getHint()}>
                    <Image
                      source={require("../assets/images/idea.png")}
                      style={{
                        width: 100,
                        height: 167,
                        marginBottom: height * 0.08
                      }}
                    />
                  </TouchableOpacity>
                ) : (
                  <>
                    <AdmobBanner />
                    <View style={{ marginBottom: height * 0.08 }} />
                  </>
                )}
              </ImageBackground>
              <HowToPlayModal
                open={howToPlayModal}
                closeModal={this.closeModal}
              />
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
    width: width * 0.9
  },

  originalWordBox: {
    flexDirection: "row",
    marginTop: height * 0.02
  },
  cryptedWordBox: {
    flexDirection: "row",
    marginBottom: height * 0.05,
    borderTopColor: "#fbc02d",
    borderTopWidth: 3
  },
  questionBox: {
    height: height * 0.2,
    justifyContent: "center",
    alignItems: "center"
  }
});
