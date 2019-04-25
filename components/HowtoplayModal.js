import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Spinner } from "native-base";
import Modal from "react-native-modal";
import { ButtonText, MainText } from "./Text";
import { height, width } from "../constants/Layout";

export default class HowtoplayModal extends Component {
  render() {
    return (
      <View>
        <Modal
          isVisible={this.props.open}
          backdropColor={"#212121"}
          backdropOpacity={0.95}
          animationIn="zoomInDown"
          animationOut="zoomOutUp"
          animationInTiming={1000}
          animationOutTiming={1000}
          backdropTransitionInTiming={1000}
          backdropTransitionOutTiming={1000}
        >
          <View style={styles.modalBox}>
            <MainText style={{ color: "#ffff00", marginBottom: height * 0.05 }}>
              {" "}
              To solve cryptogram use Caesar cipher with the given "shifted"
              value. If shift is 1, then A = Z and so on.{" "}
            </MainText>

            <TouchableOpacity onPress={this.props.closeModal}>
              <Image
                source={require("../assets/images/cross.png")}
                style={{
                  height: 40,
                  width: 60,
                  overflow: "visible"
                }}
              />
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalBox: {
    flex: 1,
    backgroundColor: "transparent",
    height: 300,
    justifyContent: "center",
    alignItems: "center"
  }
});
