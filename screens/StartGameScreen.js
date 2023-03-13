import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import Button from "../components/Common/Button";

const StartGameScreen = () => {
  return (
    <View style={style.container}>
      <View style={style.textInputContainer}>
        <TextInput
          style={style.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <View style={style.buttonContainer}>
        <Button>Reset</Button>
        <Button>Confirm</Button>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 50,
    marginTop: 100,
    marginHorizontal: 20,
    backgroundColor: "#72063c",
    borderRadius: 10,
    elevation: 4,
    shadowColor: "yellow",
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 6,
    shadowOpacity: 1,
  },

  numberInput: {
    height: 50,
    width: 100,
    padding: 10,
    fontSize: 32,
    color: "yellow",
    borderBottomWidth: 2,
    borderColor: "yellow",
    fontWeight: "700",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  textInputContainer: {
    justifyContent: "center",
    flexDirection: "row",
    margin: 5,
  },
});
export default StartGameScreen;
