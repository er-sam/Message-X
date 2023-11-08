import { View, Text, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import TypeMessage from "./TypeMessage";
import Messages from "./Messages";
import { SimpleLineIcons } from "@expo/vector-icons";

export default function Chat() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      //   headerTintColor: Colors.DarkBlue,
      headerStyle: {
        backgroundColor: "#61A3BA",
        // elevation:6
      },
      headerTitle: "",
      headerLeft: () => (
        <View
          style={{
            flexDirection: "row",
            gap: 12,
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 12,
          }}
        >
          <Text style={{ fontSize: 26, fontWeight: "bold", color: "#363062" }}>
            MessageX
          </Text>
          {/* <EvilIcons name="arrow-right" size={24} color="#" /> */}
          <Text
            style={{
              fontSize: 26,
              fontWeight: "bold",
              color: "black",
              opacity: 0.3,
            }}
          >
            Chat
          </Text>
        </View>
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Feather
          onPress={()=>navigation.navigate("Friends")}
          name="message-square" size={28} color="black" />
          <Ionicons
            onPress={() => navigation.navigate("People")}
            name="people-outline"
            size={28}
            color="black"
          />
          <SimpleLineIcons 
          onPress={()=>navigation.navigate("Settings")}
          name="settings" size={24} color="black" />
        </View>
      ),
    });
  }, []);
  return (
    <View
      style={{
        flex: 1,
        // alignItems: "center",
        // padding: 12,
        // backgroundColor: "#f8f8f8",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
          padding: 12,
          // elevation:6
          backgroundColor: "#f8f8f8",
          // marginTop:-8
        }}
      >
        <Image
          source={require("../assets/avtar.webp")}
          style={{
            width: 50,
            height: 50,
            objectFit: "contain",
            borderRadius: 100,
          }}
        />
        <Text style={{ fontSize: 26 }}>Suman Gupta</Text>
      </View>
      <Messages />
      <TypeMessage />
    </View>
  );
}
