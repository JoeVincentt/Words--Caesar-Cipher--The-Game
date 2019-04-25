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
            ? "ca-app-pub-3081883372305625/3512994868"
            : "ca-app-pub-3081883372305625/8082795266"
        } // Test ID, Replace with your-admob-unit-id
        testDeviceID="EMULATOR"
        onDidFailToReceiveAdWithError={this.bannerError}
      />
    );
  }
}

export default AdComponent;
