import { StyleSheet, View } from "react-native";
import ListExpenses from "../components/ListExpenses";
import ExpensesResume from "../components/ExpensesResume";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";

export default AllExpensesScreen = () => {
  const expensesCtx = useContext(ExpensesContext);

  return (
    <View>
      <ExpensesResume text="All time" expenses={expensesCtx.expenses} />
      <ListExpenses expenses={expensesCtx.expenses} />
    </View>
  );
};

const styles = StyleSheet.create({});
