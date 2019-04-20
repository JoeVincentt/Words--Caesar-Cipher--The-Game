import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Spinner } from "native-base";
import Modal from "react-native-modal";
import { ButtonText } from "./Text";

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
          animationInTiming={600}
          animationOutTiming={600}
          backdropTransitionInTiming={600}
          backdropTransitionOutTiming={600}
        >
          <View style={styles.modalBox}>
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
