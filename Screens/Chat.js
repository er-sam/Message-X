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
      headerStyle: {
        backgroundColor: "#61A3BA",
      },
      headerTitle: "",
      headerLeft: () => (
        // <View
        //   style={{
        //     flexDirection: "row",
        //     gap: 12,
        //     justifyContent: "center",
        //     alignItems: "center",
        //     paddingVertical: 12,
        //   }}
        // >
        //   <Text style={{ fontSize: 26, fontWeight: "bold", color: "#363062" }}>
        //     MessageX
        //   </Text>
        //   <Text
        //     style={{
        //       fontSize: 26,
        //       fontWeight: "bold",
        //       color: "black",
        //       opacity: 0.3,
        //     }}
        //   >
        //     Chat
        //   </Text>
        // </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons
          onPress={()=>{navigation.goBack()}}
          name="ios-chevron-back" size={32} color="black" />
          <Image
            source={require("../assets/avtar.webp")}
            style={{
              width: 40,
              height: 40,
              objectFit: "contain",
              borderRadius: 100,
              // marginLeft:15
            }}
          />
          <Text style={{ fontSize: 24,marginLeft:13 }}>Suman Gupta</Text>
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
          {/* <Feather
            onPress={() => navigation.navigate("Friends")}
            name="message-square"
            size={28}
            color="black"
          />
          <Ionicons
            onPress={() => navigation.navigate("People")}
            name="people-outline"
            size={28}
            color="black"
          /> */}
          <SimpleLineIcons
            onPress={() => navigation.navigate("Settings")}
            name="settings"
            size={24}
            color="black"
          />
        </View>
      ),
    });
  }, []);
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* <Vie  */}
      <Messages />
      <TypeMessage />
    </View>
  );
}
