import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert,
  Pressable,
} from "react-native";
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../Context/authContext";
import Models from "./Models";

export default function Settings() {
  const [State, setState] = useContext(AuthContext);
  const [showModal, setshowModal] = useState(false);
  const modalHandle = () => {
    setshowModal(()=>!showModal);
  };

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      // ShadowRoot,
      //   headerTintColor: Colors.DarkBlue,
      headerStyle: {
        // backgroundColor:"#9bbec8"
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
          <Text style={{ fontSize: 26, fontWeight: "bold", color: "#123456" }}>
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
            Settings
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
          <Feather
            onPress={() => navigation.navigate("Friends")}
            name="message-square"
            size={28}
            color="black"
          />
        </View>
      ),
    });
  }, []);
console.log("user",AsyncStorage.getItem('user'))
console.log(State)
  const hanldelogout = async () => {
    try {
      await AsyncStorage.removeItem("auth");
      await AsyncStorage.removeItem("user");
      await AsyncStorage.clear();
      navigation.replace("Login");
    } catch (error) {
      console.log(error);
      Alert.alert("MessageX", JSON.stringify(error));
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        padding: 12,
        backgroundColor: "#f8f8f8",
        // marginTop:34
      }}
    >
      {showModal && (
        <View>
          <Models showModal modalHandle={modalHandle} />
        </View>
      )}
      <View
        style={{
          marginTop: 34,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/sam.jpg")}
          style={{
            width: 120,
            height: 120,
            objectFit: "contain",
            borderRadius: 100,
          }}
        />
        <View style={{ flexDirection: "row", alignItems: "center", gap: 3 }}>
          <Text style={{ fontSize: 28, fontWeight: "700", color: "green" }}>
            {State?.user?.name}
          </Text>
          <MaterialIcons name="verified" size={24} color="green" />
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            // marginVertical:10,
            marginTop: 20,
            paddingVertical: 12,
            paddingHorizontal: 12,
            elevation: 5,
            width: Dimensions.get("screen").width - 100,
            borderRadius: 10,
            // alignItems:"flex-start"
          }}
        >
          <Pressable
          onPress={modalHandle}
            style={{
              flexDirection: "row",
              gap: 12,
              borderBottomWidth: 1,
              borderBottomColor: "lightgray",
              padding: 10,
            }}
          >
            <MaterialCommunityIcons
              name="account-cog-outline"
              size={28}
              color="black"
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: "700",
                color: "#123456",
              }}
            >
              Profile update
            </Text>
          </Pressable>
          <View
            style={{
              flexDirection: "row",
              gap: 12,
              borderBottomWidth: 1,
              borderBottomColor: "lightgray",
              padding: 10,
            }}
          >
            <Ionicons name="notifications-outline" size={28} color="black" />
            <Text
              style={{
                fontSize: 20,
                fontWeight: "700",
                color: "#123456",
              }}
            >
              Notifications
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              gap: 12,
              borderBottomWidth: 1,
              borderBottomColor: "lightgray",
              padding: 10,
              marginBottom: 8,
            }}
          >
            <MaterialIcons name="delete-outline" size={28} color="black" />
            <Text
              style={{
                fontSize: 20,
                fontWeight: "700",
                color: "#123456",
              }}
            >
              Delete Account
            </Text>
          </View>

          <TouchableOpacity
            onPress={hanldelogout}
            style={{
              flexDirection: "row",
              gap: 13,
              padding: 8,
              justifyContent: "center",
              backgroundColor: "#F05941",
              borderRadius: 10,
              elevation: 5,
            }}
          >
            {/* <MaterialIcons name="logout" size={28} color="black" /> */}
            <Text
              style={{
                fontWeight: "700",
                paddingBottom: 10,
                fontSize: 20,
                color: "#fefe",
                alignSelf: "center",
              }}
            >
              Log out
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
