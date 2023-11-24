import {
  Button,
  Dimensions,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import UpdateProfile from "./UpdateProfile";

export default function Models(props) {
  const { showModal, modalHandle } = props;
  console.log("showModal", modalHandle);
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => modalHandle()}
      >
        <View style={styles.modal}>
          <UpdateProfile />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginVertical: 17,
            }}
          >
            <Pressable onPress={() => modalHandle()}>
              <Text style={{ fontSize: 22, fontWeight: "700", color: "red" }}>
                Cancel
              </Text>
            </Pressable>
            <TouchableOpacity
              style={{
                backgroundColor: "green",
                paddingHorizontal: 18,
                paddingVertical: 5,
                borderRadius: 6,
              }}
            >
              <Text style={{ color: "white", fontSize: 20, fontWeight: "800" }}>
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    width: Dimensions.get("screen").width - 80,
    height: 150,
    marginTop: 150,
    // padding:100
    // backgroundColor:"black"
  },
  modal: {
    elevation: 15,
    height: "auto",
    backgroundColor: "#f5f7f8",
    width: Dimensions.get("screen").width - 80,
    marginTop: 300,
    marginLeft: 50,
    padding: 18,
    borderRadius: 10,
  },
});
