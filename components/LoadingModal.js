import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Spinner } from "native-base";
import Modal from "react-native-modal";
import { ButtonText } from "../components/Text";

export default class LoadingModal extends Component {
  render() {
    return (
      <View>
        <Modal
          isVisible={this.props.loading}
          backdropColor={"#01579b"}
          backdropOpacity={0.95}
          animationIn="zoomInDown"
          animationOut="zoomOutUp"
          animationInTiming={600}
          animationOutTiming={600}
          backdropTransitionInTiming={600}
          backdropTransitionOutTiming={600}
        >
          <View style={styles.modalBox}>
            <ButtonText> Just a moment... </ButtonText>
            <Spinner color="#ffff00" />
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
