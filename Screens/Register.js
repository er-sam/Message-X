import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  TouchableOpacity,
  Alert,
  ScrollView,
  Image,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";

export default function Login({ navigation }) {
  const [userdata, setuserdata] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    // Image : ""
  });
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setphone] = useState("");
  const [image, setimage] = useState("");

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      console.log("Img", result.assets[0].uri);
  
      if (!result.canceled) {
        setimage(result.assets[0].uri);
        // setuserdata({
        //   ...email,
        //   ...name,
        //   ...password,
        //   ...phone,
        //   image : image
        // })
      }
      else{
        Alert.alert("MessageX","Access denied!")
      }
    } catch (error) {
      Alert.alert("MessageX","Access denied!")
    }
  };

  const submitdata = () => {
    setuserdata({
      ...userdata,
      name: name,
      email: email,
      password: password,
      phone: phone,
      Image : image
    });
    if (!userdata.name || !userdata.email) {
      Alert.alert("In", JSON.stringify(userdata));
      return
    }
    Alert.alert("data", JSON.stringify(userdata));

    console.log("data", userdata);
    apicall(userdata);
  };

  const apicall = async (userdata) => {
    try {
      const { data } = await axios.post(
        "http://10.0.2.2:5000/api/v1/auth/signup",
        userdata
      );
      if (data.success) {
        navigation.navigate("Login");
        console.log(JSON.stringify(data));
        Alert.alert("MessageX", JSON.stringify(data.message));
      }else{
        Alert.alert("MessageX","Something wemt wrong....")
      }
    } catch (error) {
      Alert.alert("Error",new String(error));
      console.log("error", error);
    }
  };

  
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        padding: 12,
        backgroundColor: "#f8f8f8",
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
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

        <Pressable
          style={{
            alignItems: "center",
            padding: 18,

          }}
        >
          {image ? (
            <Image
              source={{ uri: image }}
              style={{
                width: 150,
                height: 150,
                marginTop: 10,
                borderRadius: 100,
                objectFit: "cover",
              }}
            />
          ) : (
            <MaterialIcons
              onPress={pickImage}
              name="add-photo-alternate"
              size={84}
              color="black"
            />
          )}
        </Pressable>

        <KeyboardAvoidingView
          style={{
            marginTop: 10,
            paddingVertical: 20,
            gap: 20,
            alignItems: "center",
          }}
        >
          {/* <Button onPress={pickImage} title="Choose">
            <Text>Choose Photo</Text>
          </Button> */}
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
            // id="email"
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
            placeholder="Phone"
            textContentType="telephoneNumber"
            keyboardType="number-pad"
            maxLength={10}
            // autoComplete=
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
              // id="password"
              value={password}
              onChangeText={(text) => setpassword(text)}
            />
          </View>
        </KeyboardAvoidingView>
        <View style={{ alignItems: "center", padding: 6 }}>
          <Pressable
            onPress={submitdata}
            style={{
              backgroundColor: "#4A55A2",
              paddingVertical: 10,
              width: 220,
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
            <Text style={{ fontSize: 15, fontWeight: "600" }}>
              Already having an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text
                style={{ color: "#4A55A2", fontSize: 16, fontWeight: "800" }}
              >
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
