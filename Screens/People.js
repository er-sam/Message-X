import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

export default function People() {
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
            People
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
          {/* <Ionicons
            onPress={() => navigation.navigate("People")}
            name="people-outline"
            size={28}
            color="black"
          /> */}
          <SimpleLineIcons
            onPress={()=>navigation.navigate("Settings")}
          name="settings" size={24} color="black" />
        </View>
      ),
    });
  }, []);
  return (
    <ScrollView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          backgroundColor: "#f1f1f1",
          paddingVertical: 10,
          justifyContent: "space-around",
        //   borderBottomWidth:1,
        //   borderBottomColor:"black",
        elevation:9,
          marginTop:1,
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
          <Text style={{ fontSize: 25, fontWeight: "600",width:200 }}>Suman Gupta</Text>
        </View>
        <TouchableOpacity
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
        </TouchableOpacity>
      </View>

      {/* REPEATE */}
      {/* <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          backgroundColor: "#f8f8f8",
          paddingVertical: 10,
          justifyContent: "space-around",
        //   borderBottomWidth:1,
        //   borderBottomColor:"black",
        elevation:9,
          marginTop:1,
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
          <Text style={{ fontSize: 25, fontWeight: "600" }}>Suman Gupta</Text>
        </View>
        <TouchableOpacity
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
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          backgroundColor: "#f8f8f8",
          paddingVertical: 10,
          justifyContent: "space-around",
        //   borderBottomWidth:1,
        //   borderBottomColor:"black",
        elevation:9,
          marginTop:1,
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
          <Text style={{ fontSize: 25, fontWeight: "600",width:200 }}>Suman Gupta</Text>
        </View>
        <TouchableOpacity
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
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          backgroundColor: "#f8f8f8",
          paddingVertical: 10,
          justifyContent: "space-around",
        //   borderBottomWidth:1,
        //   borderBottomColor:"black",
        elevation:9,
          marginTop:1,
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
          <Text style={{ fontSize: 25, fontWeight: "600" }}>Satyam mishre</Text>
        </View>
        <TouchableOpacity
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
        </TouchableOpacity>
      </View> */}
    </ScrollView>
  );
}
