import React from "react";
import { Platform } from "react-native";
import { AdMobInterstitial } from "expo";

const INTERSTITIAL_ID =
  Platform.OS === "ios"
    ? "ca-app-pub-3081883372305625/5373673774"
    : "ca-app-pub-3081883372305625/1051285383";

AdMobInterstitial.setAdUnitID(INTERSTITIAL_ID);
AdMobInterstitial.setTestDeviceID("EMULATOR");

export const showAdmobInterstitialAd = async () => {
  await AdMobInterstitial.requestAdAsync();
  await AdMobInterstitial.showAdAsync();
};
