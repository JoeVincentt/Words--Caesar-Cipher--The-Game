import React from "react";
import { Platform } from "react-native";
import { AdMobInterstitial, AdMobRewarded } from "expo";

const INTERSTITIAL_ID =
  Platform.OS === "ios"
    ? "ca-app-pub-3081883372305625/5373673774"
    : "ca-app-pub-3081883372305625/1051285383";
const REWARDED_ID =
  Platform.OS === "ios"
    ? "ca-app-pub-3081883372305625/5182102080"
    : "ca-app-pub-3081883372305625/4798958705";

AdMobInterstitial.setAdUnitID(INTERSTITIAL_ID);
AdMobInterstitial.setTestDeviceID("EMULATOR");
AdMobRewarded.setAdUnitID(REWARDED_ID);
AdMobRewarded.setTestDeviceID("EMULATOR");

export const showAdmobRewardedAd = async () => {
  await AdMobRewarded.requestAdAsync();
  await AdMobRewarded.showAdAsync();
};

export const showAdmobInterstitialAd = async () => {
  await AdMobInterstitial.requestAdAsync();
  await AdMobInterstitial.showAdAsync();
};
