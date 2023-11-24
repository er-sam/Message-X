import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Dimensions } from "react-native";
import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/authContext";

export default function UpdateProfile() {
  const [State, setState] = useContext(AuthContext);
  const [name, setname] = useState(State?.user?.name);
  const [email, setemail] = useState(State?.user?.email);
  const [phone, setphone] = useState(State?.user?.phone);
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={{ fontSize: 23, fontWeight: "800", textAlign: "center" }}>
        Update Profile
      </Text>
      <View style={styles.box}>
        <Text style={styles.input}>Name : </Text>
        <TextInput
          style={{ fontSize: 20,width:Dimensions.get("window").width-10 }}
          value={name}
          onChangeText={(e) => {
            setname(e.target.value);
          }}
          textContentType="name"
        />
      </View>
      <View style={styles.box}>
        <Text style={styles.input}>Email : </Text>
        <TextInput
          style={{ fontSize: 20 ,width:Dimensions.get("window").width-10}}
          value={email}
          onChangeText={(e) => {
            setemail(e.target.value);
          }}
          textContentType="emailAddress"
        />
      </View>
      <View style={styles.box}>
        <Text style={styles.input}>Phone : </Text>
        <TextInput
          style={{ fontSize: 20,width:Dimensions.get("window").width-10}}
          value={phone}
          onChangeText={(e) => {
            setphone(e.target.value);
          }}
          textContentType="telephoneNumber"
          keyboardType="number-pad"
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 8,
  },
  box: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    color: "black",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
  },
  input: {
    fontSize: 20,
    fontWeight: "800",
  },
});
