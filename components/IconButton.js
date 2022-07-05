import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ icon, size, color, pressHandler }) => {
  const pressedItem = ({ pressed }) => pressed && styles.pressed;

  return (
    <Pressable onPress={pressHandler} style={pressedItem}>
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
