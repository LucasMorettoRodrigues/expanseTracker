import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../constants/colors";

export default Button = ({ children, onPress, mode, style }) => {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 12,
    width: "100%",
    alignItems: "center",
    backgroundColor: colors.primary500,
    borderRadius: 5,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  flatText: {
    color: colors.primary500,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: colors.primary100,
  },
});
