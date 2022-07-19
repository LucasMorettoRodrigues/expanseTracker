import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./UI/Button";
import Input from "./UI/Input";

export default ExpenseForm = ({ onCancel, onSubmit, defaultValues }) => {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: defaultValues ? defaultValues.date.toISOString().slice(0, 10) : "",
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : "",
      isValid: true,
    },
  });

  const handleOnChange = (inputIdentifier, value) => {
    setInputs({
      ...inputs,
      [inputIdentifier]: { value: value, isValid: true },
    });
  };

  const handleConfirm = () => {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid =
      new Date(expenseData.date).toString() !== "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !descriptionIsValid || !dateIsValid) {
      // Alert.alert("Invalid Input", "Please check your input values");
      setInputs({
        amount: { value: inputs.amount.value, isValid: amountIsValid },
        date: { value: inputs.date.value, isValid: dateIsValid },
        description: {
          value: inputs.description.value,
          isValid: descriptionIsValid,
        },
      });

      return;
    }

    onSubmit(expenseData);
  };

  const formIsInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  return (
    <View>
      <Input
        style={styles.inputController}
        label="Description"
        textInputConfig={{
          onChangeText: (value) => handleOnChange("description", value),
          value: inputs.description.value,
        }}
        isInvalid={!inputs.description.isValid}
      />

      <Input
        style={styles.inputController}
        label="Amount"
        textInputConfig={{
          keyboardType: "decimal-pad",
          multilne: true,
          autocorrect: false,
          onChangeText: (value) => handleOnChange("amount", value),
          value: inputs.amount.value,
        }}
        isInvalid={!inputs.amount.isValid}
      />

      <Input
        style={styles.inputController}
        label="Date"
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: (value) => handleOnChange("date", value),
          value: inputs.date.value,
        }}
        isInvalid={!inputs.date.isValid}
      />
      {formIsInvalid && (
        <Text style={styles.errorText}>
          Invalid input values - please check your entered data!
        </Text>
      )}
      <View style={styles.buttonContainer}>
        <Button onPress={onCancel} mode="flat" style={{ flex: 1, margin: 5 }}>
          Cancel
        </Button>
        <Button onPress={handleConfirm} style={{ flex: 1, margin: 5 }}>
          Confirm
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputController: {
    marginVertical: 10,
    width: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  errorText: {
    color: "red",
  },
});
