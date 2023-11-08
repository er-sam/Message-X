import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

export default function Login({navigation}) {
  const [email,setemail] = useState("");
  const [password,setpassword] = useState("");

  function submitdata(){
    console.log(email,password)
    navigation.navigate("Chat")
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        padding: 12,
        backgroundColor: "#61A3BA",
      }}
    >
      <KeyboardAvoidingView>
        <View style={{ marginTop: 100 }}>
          <Text
            style={{
              color: "#4A55A2",
              fontSize: 27,
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            Sign In
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
            Just one minute away from the world of love
          </Text>
        </View>
        <View
          style={{
            marginTop: 20,
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
              width: 240,
            }}
            placeholder="E-mail"
            textContentType="emailAddress"
            id="email"
            value={email}
            onChangeText={(text)=>setemail(text)}
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
                width: 240,
              }}
              secureTextEntry={true}
              placeholder="Password"
              textContentType="password"
              id="password"
              value={password}
              onChangeText={(text)=>setpassword(text)}
            />
            <TouchableOpacity>
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
            </TouchableOpacity>
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
              Sign In
            </Text>
          </Pressable>
          <View style={{ flexDirection: "row", gap: 6, marginTop: 18 }}>
            <Text style={{ fontSize: 15 }}>Don't have an account?</Text>
            <TouchableOpacity
            onPress={()=>navigation.navigate('Register')}
            >
              <Text style={{ color: "#4A55A2", fontSize: 16 }}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
      <View style={{ marginVertical: 26 }}>
        <Text>------------OR------------</Text>
      </View>
      <View>
        <Pressable style={{ elevation: 6 }}>
          <Text
            style={{
              borderWidth: 1,
              borderColor: "#4A55A2",
              borderRadius: 7,
              paddingVertical: 10,
              paddingHorizontal: 15,
              fontSize: 17,
              fontWeight: "600",
            }}
          >
            Login with Google
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
