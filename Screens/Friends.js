import { View, Text, ScrollView, Image, TouchableOpacity, Pressable } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

export default function Friends() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      //   headerTintColor: Colors.DarkBlue,
      headerStyle: {
        backgroundColor: "#61A3BA",
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
            Freiends
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
          {/* <Feather name="message-square" size={28} color="black" /> */}
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
    <ScrollView style={{marginTop:7}}>
      <Pressable
      onPressOut={()=>navigation.navigate("Chat")}
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 15,
          backgroundColor: "#DDE6ED",
          padding: 10,
          // marginLeft:11,
          // elevation: 5,
          // marginTop: 1,
        }}
      >
        <View style={{ flexDirection: "row", gap: 11, alignItems: "center" }}>
          <Image
            source={require("../assets/avtar.webp")}
            style={{
              width: 50,
              height: 50,
              objectFit: "contain",
              borderRadius: 100,
            }}
          />
          <Text style={{ fontSize: 25, fontWeight: "600", width: 200 }}>
            Suman Gupta
          </Text>
        </View>
        {/* <TouchableOpacity
          style={{
            backgroundColor: "#61A3BA",
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 18,
            elevation: 5,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "700",
              color: "white",
              textAlign: "center",
            }}
          >
            Request
          </Text>
        </TouchableOpacity> */}
      </Pressable>


    </ScrollView>
  );
}
