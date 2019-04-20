import React from "react";
import { Platform } from "react-native";
import { AdMobBanner } from "expo";

class AdComponent extends React.Component {
  render() {
    return (
      <AdMobBanner
        bannerSize="fullBanner"
        adUnitID={
          Platform.OS === "ios"
            ? "ca-app-pub-3081883372305625/1626000458"
            : "ca-app-pub-3081883372305625/6303612066"
        } // Test ID, Replace with your-admob-unit-id
        testDeviceID="EMULATOR"
        onDidFailToReceiveAdWithError={this.bannerError}
      />
    );
  }
}

export default AdComponent;
