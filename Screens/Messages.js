import { View, Text, ScrollView } from "react-native";
import React from "react";

export default function Messages() {
  return (
    <ScrollView style={{padding:10 }}>
      <View
        style={{
          backgroundColor: "#DDE6ED",
          paddingHorizontal: 10,
          paddingVertical: 10,
          width: 210,
          borderRadius: 8,
          justifyContent: "flex-start",
          marginTop: 10,
        }}
      >

        <Text style={{ fontSize: 17 }}>
          In VS Code if I type "lorem" and then press enter it will generate a
          paragraph of lorem ipsum. The only problem is that the paragraph comes
          out ..
        </Text>
        <Text style={{ alignSelf: "flex-end" }}>22/Dec/22 01:12 PM</Text>
      </View>

      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 10,
          width: 210,
          borderRadius: 8,
          backgroundColor: "#007bff",
          alignSelf: "flex-end",
          marginTop: 10,
        }}
      >
        <Text style={{ fontSize: 18, color: "white" }}>
          In VS Code if I type "lorem" and then press enter it will generate a
          paragraph of lorem ipsum. The only problem is that the paragraph comes
          out ..
        </Text>
        <Text style={{ alignSelf: "flex-end" }}>22/Dec/22 01:12 PM</Text>
      </View>
    </ScrollView>
  );
}
