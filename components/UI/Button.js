import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../constants/colors";

export default Button = ({ text, onPress, mode, style }) => {
  return (
    <View style={style}>
      <Pressable onPress={onPress}>
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {text}
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
});
