import { View } from "react-native";
import { expenses } from "../data/expenses";
import ListExpenses from "../components/ListExpenses";
import ExpensesResume from "../components/ExpensesResume";

export default RecentExpensesScreen = () => {
  return (
    <View>
      <ExpensesResume text="Last 7 days" expenses={expenses} />
      <ListExpenses expenses={expenses} />
    </View>
  );
};
