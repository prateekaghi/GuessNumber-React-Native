import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, Alert } from "react-native";
import Button from "../components/Common/Button";
import Color from "../utils/colors";

const StartGameScreen = ({ onNumberConfirm }) => {
  const [enteredNumber, setEnteredNumber] = useState("");
  const inputHandler = (e) => {
    setEnteredNumber(e);
  };

  const confirmButtonHandler = () => {
    const number = parseInt(enteredNumber);
    if (isNaN(number) || number <= 0 || number > 99) {
      Alert.alert("Invalid Number", "Select number between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetButtonHandler },
      ]);
    }
    onNumberConfirm(number);
  };
  const resetButtonHandler = () => {
    setEnteredNumber("");
  };
  return (
    <View style={style.container}>
      <Text style={style.instructionText}>Enter A Number</Text>
      <View style={style.textInputContainer}>
        <TextInput
          style={style.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={inputHandler}
          value={enteredNumber}
        />
      </View>
      <View style={style.buttonContainer}>
        <Button onPress={resetButtonHandler}>Reset</Button>
        <Button onPress={confirmButtonHandler}>Confirm</Button>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 50,
    marginTop: 100,
    marginHorizontal: 20,
    backgroundColor: Color.Red500,
    borderRadius: 10,
    elevation: 4,
    shadowColor: Color.Yellow500,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 6,
    shadowOpacity: 1,
  },

  numberInput: {
    height: 50,
    width: 100,
    padding: 10,
    fontSize: 32,
    color: Color.Yellow500,
    borderBottomWidth: 2,
    borderColor: Color.Yellow500,
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

  instructionText: {
    fontSize: 36,
    color: Color.Yellow500,
  },
});
export default StartGameScreen;
