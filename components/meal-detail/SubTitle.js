import { Text, View, StyleSheet } from "react-native";

const SubTitle = ({ children }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
};

export default SubTitle;

const styles = StyleSheet.create({
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: "#7a497a",
    borderBottomWidth: 2,
  },
  subTitle: {
    color: "#7a497a",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
