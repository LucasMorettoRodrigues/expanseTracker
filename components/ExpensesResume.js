import { View, Text, StyleSheet } from "react-native";
import { colors } from "../constants/colors";

export default ExpensesResume = ({ text, expenses }) => {
  const total = expenses.reduce((sum, cur) => sum + cur.amount, 0).toFixed(2);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.total}>$ {total}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: colors.primary500,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 10,
    marginTop: 20,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    justifyContent: "space-between",
    elevation: 10,
  },
  text: {
    color: colors.primary500,
    fontSize: 18,
  },
  total: {
    fontSize: 18,
    color: colors.primary500,
    fontWeight: "bold",
  },
});
