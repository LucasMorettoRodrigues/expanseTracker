import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { colors } from "../constants/colors";

export default ManageExpenseScreen = ({ navigation }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleAdd = () => {
    console.log("add");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputController}>
        <Text style={styles.label}>Description</Text>
        <TextInput
          onChange={(value) => setDescription(value)}
          style={styles.input}
        ></TextInput>
      </View>
      <View style={styles.inputController}>
        <Text style={styles.label}>Amount</Text>
        <TextInput
          onChange={(value) => setAmount(value)}
          style={styles.input}
        ></TextInput>
      </View>
      <View style={styles.inputController}>
        <Pressable onClick={handleAdd} style={styles.confirmButton}>
          <Text style={styles.buttonText}>OK</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  inputController: {
    marginVertical: 10,
    width: "100%",
  },
  label: {
    fontSize: 16,
    color: colors.primary500,
    fontWeight: "bold",
  },
  input: {
    padding: 10,
    backgroundColor: "white",
    width: "100%",
    borderRadius: 5,
  },
  confirmButton: {
    padding: 12,
    width: "100%",
    alignItems: "center",
    backgroundColor: colors.primary500,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});
