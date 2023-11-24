import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  TouchableOpacity,
  Alert,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [show, setshow] = useState(true);


  function submitdata() {
    const userdata = {
      email,
      password,
    };
    loginapicall(userdata);
  }

  useEffect(() => {
    const LoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("auth");
        console.log("auth", token);
        if (token) {
          navigation.replace("Friends");
        }
      } catch (error) {
        Alert.alert("MessageX", error);
      }
    };
    LoginStatus();
  }, []);

  const loginapicall = async (userdata) => {
    // console.log(email, password);
    // console.log("post", userdata);
    try {
      const { data } = await axios.post(
        "http://10.0.2.2:5000/api/v1/auth/login",
        { email: email, password: password }
        // userdata
      );
      if (data.success) {
        console.log("first", data.user);
        await AsyncStorage.setItem("user",JSON.stringify(data.user));
        await AsyncStorage.setItem("auth", data.Token);
        // setUser(data.user);
        Alert.alert("MessageX", JSON.stringify(data.message));
        navigation.navigate("Friends");
      }

      setemail("");
      setpassword("");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        padding: 12,
      }}
    >
      <KeyboardAvoidingView>
        <View style={{ marginTop: 100 }}>
          <Text
            style={{
              color: "#4A55A2",
              fontSize: 40,
              fontWeight: "800",
              textAlign: "center",
            }}
          >
            MessageX
          </Text>
          {/* <Text
            style={{
              fontWeight: "500",
              fontSize: 16,
              marginTop: 20,
              textAlign: "center",
              color: "grey",
            }}
          >
            Just one minute away from the world of love
          </Text> */}
        </View>
        <View
          style={{
            marginTop: 20,
            paddingVertical: 20,
            gap: 20,
            alignItems: "stretch",
            // flex:1
          }}
        >
          <View
            style={{
              paddingRight: 20,
              paddingLeft: 8,
              borderRadius: 7,
              paddingVertical: 10,
              backgroundColor: "#fff",
              // width: 280,
              width: Dimensions.get("screen").width - 80,
              flexDirection: "row",
              gap: 11,
              overflow: "hidden",
            }}
          >
            <MaterialCommunityIcons name="account" size={28} color="black" />
            <TextInput
              style={{
                fontSize: 23,
              }}
              autoFocus
              autoComplete="email"
              placeholder="E-mail"
              textContentType="emailAddress"
              id="email"
              value={email}
              onChangeText={(text) => setemail(text)}
            />
          </View>
          <View
            style={{
              paddingRight: 20,
              paddingLeft: 8,
              borderRadius: 7,
              paddingVertical: 10,
              backgroundColor: "#fff",
              // width: 280,
              width: Dimensions.get("screen").width - 80,
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 5,
            }}
          >
            <MaterialCommunityIcons name="shield-key" size={28} color="black" />
            <TextInput
              style={{
                fontSize: 23,
                flex: 1,
                marginLeft: 11,
              }}
              secureTextEntry={show}
              placeholder="Password"
              textContentType="password"
              id="password"
              value={password}
              onChangeText={(text2) => setpassword(text2)}
            />
            {show ? (
              <MaterialIcons
                onPress={() => {
                  setshow(!show);
                }}
                name="visibility-off"
                size={24}
                color="black"
              />
            ) : (
              <MaterialIcons
                onPress={() => {
                  setshow(!show);
                }}
                name="visibility"
                size={24}
                color="black"
                // style={{a}}
              />
            )}
          </View>
          {/* <TouchableOpacity>
            <Text
              style={{
                alignSelf: "flex-end",
                paddingRight: 10,
                paddingVertical: 6,
                fontSize: 13,
              }}
            >
              Forgot your password?
            </Text>
          </TouchableOpacity> */}
        </View>

        <View style={{ alignItems: "center", padding: 6 }}>
          <TouchableOpacity
            onPress={submitdata}
            style={{
              backgroundColor: "#4A55A2",
              paddingVertical: 11,
              width: 200,
              borderRadius: 25,
              elevation: 6,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 21,
                fontWeight: "800",
              }}
            >
              Log In
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              gap: 6,
              marginTop: 18,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 15 }}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text
                style={{ color: "#4A55A2", fontSize: 18, fontWeight: "800" }}
              >
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
      <View style={{ marginVertical: 26 }}>
        <Text>------------OR------------</Text>
      </View>
      <View>
        <Pressable
          style={{
            // elevation: 6,
            borderWidth: 1,
            borderColor: "#4A55A2",
            borderRadius: 20,
            paddingVertical: 10,
            paddingHorizontal: 15,
            flexDirection: "row",
            gap: 6,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign name="google" size={24} color="gray" />
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
              color: "gray",
            }}
          >
            Sign in with Google
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
