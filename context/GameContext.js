import React from "react";
import { AdMobInterstitial } from "expo";

//Create context
export const GameContext = React.createContext();
export const GameConsumer = GameContext.Consumer;

export class GameProvider extends React.Component {
  state = {
    coins: 0,
    reducers: {}
  };

  componentDidMount() {
    // Interstitial ad
    AdMobInterstitial.addEventListener("interstitialDidLoad", () => {});
    AdMobInterstitial.addEventListener("interstitialDidFailToLoad", () => {});
    AdMobInterstitial.addEventListener("interstitialDidOpen", () => {});
    AdMobInterstitial.addEventListener("interstitialDidClose", () => {});
    AdMobInterstitial.addEventListener(
      "interstitialWillLeaveApplication",
      () => {}
    );
  }

  componentWillUnmount() {
    AdMobInterstitial.removeAllListeners();
  }

  render() {
    return (
      <GameContext.Provider value={this.state}>
        {this.props.children}
      </GameContext.Provider>
    );
  }
}
