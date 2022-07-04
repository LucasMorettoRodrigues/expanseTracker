import { useContext, useLayoutEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Button from "../components/UI/Button";
import { colors } from "../constants/colors";
import IconButton from "../components/UI/IconButton";
import { ExpensesContext } from "../store/expenses-context";

export default ManageExpenseScreen = ({ route, navigation }) => {
  const expensesCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const [description, setDescription] = useState(
    editedExpenseId
      ? expensesCtx.expenses.find((item) => item.id === editedExpenseId)
          .description
      : ""
  );
  const [amount, setAmount] = useState(
    editedExpenseId
      ? expensesCtx.expenses
          .find((item) => item.id === editedExpenseId)
          .amount.toString()
      : ""
  );

  const handleConfirm = () => {
    if (!isValidated()) {
      return;
    }

    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId, {
        description,
        amount: parseFloat(amount),
      });
    } else {
      expensesCtx.addExpense({
        description: description,
        amount: parseFloat(amount),
        date: new Date(),
      });
    }
    navigation.goBack();
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  const handleDelete = () => {
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  };

  const isValidated = () => {
    if (description.length > 0 && parseInt(amount)) {
      return true;
    }

    return false;
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputController}>
        <Text style={styles.label}>Description</Text>
        <TextInput
          value={description}
          onChangeText={(value) => setDescription(value)}
          style={styles.input}
        ></TextInput>
      </View>

      <View style={styles.inputController}>
        <Text style={styles.label}>Amount</Text>
        <TextInput
          value={amount}
          onChangeText={(value) => setAmount(value)}
          style={styles.input}
        ></TextInput>
      </View>

      <View style={styles.inputController}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={handleCancel}
            mode="flat"
            style={{ flex: 1, margin: 5 }}
          >
            Cancel
          </Button>
          <Button onPress={handleConfirm} style={{ flex: 1, margin: 5 }}>
            OK
          </Button>
        </View>
        <View style={styles.iconButtonContainer}>
          <View style={styles.iconButton}>
            <IconButton
              icon="trash"
              size={32}
              color={colors.primary500}
              onPress={handleDelete}
            />
          </View>
        </View>
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
  buttonContainer: {
    flexDirection: "row",
  },
  iconButtonContainer: {
    alignItems: "center",
    borderTopColor: colors.primary100,
    borderTopWidth: 2,
    marginTop: 15,
  },
  iconButton: {
    margin: 10,
  },
});
