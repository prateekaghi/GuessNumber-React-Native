import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import Color from "../../utils/colors";

const Button = ({ children, onPress }) => {
  return (
    <View style={style.container}>
      <Pressable
        style={({ pressed }) => [pressed ? style.presses : ""]}
        onPress={onPress}
        android_ripple={{
          color: Color.Yellow500,
          borderless: true,
        }}
      >
        <Text style={style.inputField}>{children}</Text>
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    borderWidth: 1,
    marginVertical: 8,
    borderRadius: 10,
    borderColor: Color.Yellow500,
  },
  inputField: {
    color: Color.Yellow500,
    textAlign: "center",
    fontWeight: "600",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  presses: {
    opacity: 0.25,
  },
});
export default Button;
