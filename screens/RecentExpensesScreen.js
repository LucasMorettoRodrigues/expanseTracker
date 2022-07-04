import { View } from "react-native";
import ListExpenses from "../components/ListExpenses";
import ExpensesResume from "../components/ExpensesResume";
import { useContext } from "react";
import { getDateMinusMonth } from "../util/date";
import { ExpensesContext } from "../store/expenses-context";

export default RecentExpensesScreen = () => {
  const expensesCtx = useContext(ExpensesContext);

  const expenses = expensesCtx.expenses.filter((item) => {
    const today = new Date();
    const date1MonthAgo = getDateMinusMonth(today, 1);

    return item.date > date1MonthAgo;
  });

  return (
    <View>
      <ExpensesResume text="Last 7 days" expenses={expenses} />
      <ListExpenses expenses={expenses} />
    </View>
  );
};
