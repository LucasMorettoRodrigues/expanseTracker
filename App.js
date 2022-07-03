import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ManageExpenseScreen from "./screens/ManageExpenseScreen";
import RecentExpensesScreen from "./screens/RecentExpensesScreen";
import AllExpensesScreen from "./screens/AllExpensesScreen";
import { colors } from "./constants/colors";
import IconButton from "./components/UI/IconButton";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpensesOverview = ({ navigation }) => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerRight: () => (
          <IconButton
            icon="add"
            size={32}
            color="white"
            onPress={() => {
              navigation.navigate("ManageExpense");
            }}
          />
        ),
      }}
    >
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpensesScreen}
        options={{
          title: "Recent Expenses",
          headerStyle: {
            backgroundColor: colors.primary500,
          },
          headerTintColor: "#fff",
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpensesScreen}
        options={{
          title: "All Expenses",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesOverview}
            statusBarHidden={true}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="ManageExpense" component={ManageExpenseScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
