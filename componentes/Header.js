import { View, Text, StyleSheet } from "react-native";

export default function Header({ navigation }) {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>Instagram</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  logo: {
    fontSize: 28,
    fontWeight: "bold",
    letterSpacing: 2,
  },
});
