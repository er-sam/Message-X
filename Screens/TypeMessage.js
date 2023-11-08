import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  Button,
  TouchableOpacity,
  Dimensions,
  Pressable,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
// import { Ionicons } from '@expo/vector-icons';

export default function TypeMessage() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
        // backgroundColor: "#fff",
      }}
    >
      <KeyboardAvoidingView>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 10,
            paddingVertical: 7,
            borderTopWidth: 1,
            borderTopColor: "#dddddd",
            borderTopLeftRadius:9
            // marginBottom:20
          }}
        >
          <Entypo
            style={{ marginRight: 7 }}
            name="emoji-happy"
            size={24}
            color="black"
          />
          <TextInput
            style={{
              flex: 1,
              height: 40,
              borderWidth: 1,
              borderColor: "#dddddd",
              borderRadius: 20,
              paddingHorizontal: 10,
              fontSize: 18,
            }}
            placeholder="Type message here...."
          />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
              marginLeft: 5,
            }}
          >
            <Ionicons name="mic-outline" size={25} color="black" />
            <Ionicons name="camera-outline" size={27} color="black" />
          </View>

          <Pressable
            style={{
              backgroundColor: "#007bff",
              paddingVertical: 6,
              paddingHorizontal: 14,
              borderRadius: 20,
              marginLeft: 10,
              elevation:2
            }}
          >
            <Text style={{ fontSize: 17, fontWeight: "600", color: "white" }}>
              Send
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
