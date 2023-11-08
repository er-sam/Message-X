import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";

export default function Login({ navigation }) {
  const [data, setdata] = useState({});
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setphone] = useState("");

  function submitdata() {
    setdata({
      ...data,
      name: name,
      email: email,
      password: password,
      phone: phone,
    });
    console.log("data", data);
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        padding: 12,
        backgroundColor: "#f8f8f8",
      }}
    >
      <KeyboardAvoidingView>
        <View style={{ marginTop: 70 }}>
          <Text
            style={{
              color: "#4A55A2",
              fontSize: 27,
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            Sign Up
          </Text>
          <Text
            style={{
              fontWeight: "500",
              fontSize: 16,
              marginTop: 20,
              textAlign: "center",
              color: "grey",
            }}
          >
            Register Now. It's Free!!
          </Text>
        </View>

        <View style={{ alignItems: "center", padding: 18 }}>
          <Image
            source={require("../assets/favicon.png")}
            style={{
              width: 150,
              height: 150,
              marginTop: 10,
              backgroundColor: "red",
              padding: 20,
              borderRadius: 100,
            }}
          />
        </View>

        <View
          style={{
            marginTop: 10,
            paddingVertical: 20,
            gap: 20,
            alignItems: "center",
          }}
        >
          <TextInput
            style={{
              fontSize: 20,
              paddingRight: 20,
              paddingLeft: 8,
              borderRadius: 7,
              paddingVertical: 10,
              backgroundColor: "#fff",
              width: 280,
            }}
            placeholder="Name"
            textContentType="name"
            onChangeText={(text) => setname(text)}
            value={name}
          />
          <TextInput
            style={{
              fontSize: 20,
              paddingRight: 20,
              paddingLeft: 8,
              borderRadius: 7,
              paddingVertical: 10,
              backgroundColor: "#fff",
              width: 280,
            }}
            placeholder="E-mail"
            textContentType="emailAddress"
            id="email"
            value={email}
            onChangeText={(text) => setemail(text)}
          />
          <TextInput
            style={{
              fontSize: 20,
              paddingRight: 20,
              paddingLeft: 8,
              borderRadius: 7,
              paddingVertical: 10,
              backgroundColor: "#fff",
              width: 280,
            }}
            placeholder="Phone (+91 only)"
            textContentType="telephoneNumber"
            keyboardType="number-pad"
            id="password"
            maxLength={10}
            value={phone}
            onChangeText={(text) => setphone(text)}
          />
          <View>
            <TextInput
              style={{
                fontSize: 20,
                paddingRight: 20,
                paddingLeft: 8,
                borderRadius: 7,
                paddingVertical: 10,
                backgroundColor: "#fff",
                width: 280,
              }}
              placeholder="Password"
              textContentType="password"
              id="password"
              value={password}
              onChangeText={(text) => setpassword(text)}
            />
          </View>
        </View>
        <View style={{ alignItems: "center", padding: 6 }}>
          <Pressable
            onPress={submitdata}
            style={{
              backgroundColor: "#4A55A2",
              paddingVertical: 10,
              width: 120,
              borderRadius: 5,
              // elevation: 6,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 20,
                fontWeight: "800",
              }}
            >
              Done
            </Text>
          </Pressable>
          <View style={{ flexDirection: "row", gap: 6, marginTop: 18 }}>
            <Text style={{ fontSize: 15 }}>Already having an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={{ color: "#4A55A2", fontSize: 16 }}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
