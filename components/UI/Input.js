import { StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../../constants/colors";

export default Input = ({ label, style, textInputConfig, isInvalid }) => {
  return (
    <View style={style}>
      <Text style={[styles.label, isInvalid && styles.invalidInputLabel]}>
        {label}
      </Text>
      <TextInput
        {...textInputConfig}
        style={[styles.input, isInvalid && styles.invalidInput]}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
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
  invalidInput: {
    backgroundColor: colors.error500,
  },
  invalidInputLabel: {
    color: "red",
  },
});
