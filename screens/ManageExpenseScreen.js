import { useContext, useLayoutEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import Button from "../components/UI/Button";
import { colors } from "../constants/colors";
import IconButton from "../components/UI/IconButton";
import { ExpensesContext } from "../store/expenses-context";
import ExpenseForm from "../components/ExpenseForm";

export default ManageExpenseScreen = ({ route, navigation }) => {
  const expensesCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const selectedExpense = expensesCtx.expenses.find(
    (item) => item.id == editedExpenseId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const handleOnConfirm = (expenseData) => {
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId, {
        description: expenseData.description,
        amount: parseFloat(expenseData.amount),
      });
    } else {
      expensesCtx.addExpense({
        description: expenseData.description,
        amount: expenseData.amount,
        date: new Date(),
      });
    }
    navigation.goBack();
  };

  const handleOnCancel = () => {
    navigation.goBack();
  };

  const handleDelete = () => {
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  };

  const isValidated = (expenseData) => {
    if (expenseData.description.length > 0 && parseInt(expenseData.amount)) {
      return true;
    }

    return false;
  };

  return (
    <View style={styles.container}>
      <ExpenseForm
        onCancel={handleOnCancel}
        onSubmit={handleOnConfirm}
        defaultValues={selectedExpense}
      />
      <View style={styles.inputController}>
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
