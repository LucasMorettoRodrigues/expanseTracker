import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import { colors } from "../constants/colors";
import { getFormattedDate } from "../util/date";

export default ListExpenses = ({ expenses }) => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      {expenses.map((expense) => (
        <Pressable
          onPress={() =>
            navigation.navigate("ManageExpense", { expenseId: expense.id })
          }
          style={styles.card}
          key={expense.id}
        >
          <View>
            <Text style={styles.description}>{expense.description}</Text>
            <Text style={styles.date}>{getFormattedDate(expense.date)}</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{expense.amount}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 5,
    padding: 10,
    flexDirection: "row",
    backgroundColor: colors.primary100,
    justifyContent: "space-between",
    elevation: 10,
  },
  description: {
    color: "white",
    fontWeight: "bold",
  },
  date: {
    color: "white",
  },
  priceContainer: {
    backgroundColor: "white",
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  price: {
    color: colors.primary500,
    fontWeight: "bold",
  },
});
