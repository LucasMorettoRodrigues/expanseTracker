import { StyleSheet, View } from "react-native";
import { expenses } from "../data/expenses";
import ListExpenses from "../components/ListExpenses";
import ExpensesResume from "../components/ExpensesResume";

export default AllExpensesScreen = () => {
  return (
    <View>
      <ExpensesResume text="All time" expenses={expenses} />
      <ListExpenses expenses={expenses} />
    </View>
  );
};

const styles = StyleSheet.create({});
