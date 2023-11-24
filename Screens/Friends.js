import { View, Text, ScrollView, Image, Pressable, Alert } from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AuthContext } from "../Context/authContext";


export default function Friends() {
  const [State,setState] = useContext(AuthContext);


  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
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
            paddingVertical: 18,
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
    <ScrollView style={{ marginTop: 2 }}>
      <Pressable
        onPressOut={() => navigation.navigate("Chat")}
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 15,
          paddingVertical: 5,
          marginLeft: 18,
          marginRight: 18,
          borderBottomWidth: 1,
          borderBottomColor: "#DDE",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
          <Image
            source={require("../assets/avtar.webp")}
            style={{
              width: 50,
              height: 50,
              objectFit: "contain",
              borderRadius: 100,
            }}
          />
          <Text style={{ fontSize: 22, fontWeight: "500" }}>{State?.user?.name}</Text>
        </View>
      </Pressable>

      <Pressable
        onPressOut={() => navigation.navigate("Chat")}
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 15,
          // backgroundColor: "#DDE6ED",
          paddingVertical: 5,
          marginLeft: 18,
          borderBottomWidth: 1,
          borderBottomColor: "#DDE",
          marginRight: 18,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
          <Image
            source={require("../assets/sam.jpg")}
            style={{
              width: 50,
              height: 50,
              objectFit: "contain",
              borderRadius: 100,
            }}
          />
          <Text style={{ fontSize: 22, fontWeight: "500" }}>Sam</Text>
        </View>
      </Pressable>

      <Pressable
        onPressOut={() => navigation.navigate("Chat")}
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 15,
          paddingVertical: 5,
          marginLeft: 18,
          borderBottomWidth: 1,
          borderBottomColor: "#DDE",
          marginRight: 18,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
          <Image
            source={require("../assets/download.jpg")}
            style={{
              width: 50,
              height: 50,
              objectFit: "contain",
              borderRadius: 100,
            }}
          />
          <Text style={{ fontSize: 22, fontWeight: "500" }}>Pawan Sr</Text>
        </View>
      </Pressable>
    </ScrollView>
  );
}
