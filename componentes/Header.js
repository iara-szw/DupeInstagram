import { View, Image, StyleSheet } from "react-native";
import logo from "../assets/logo.png";
import camara from "../assets/Shape.png";
import igtv from "../assets/IGTV.png";
import mensajes from "../assets/mensajes.png";

export default function Header() {
  return (
    <View style={styles.header}>
      <Image source={camara} style={styles.icon} />
      <Image source={logo} style={styles.logo} />
      <View style={styles.rightIcons}>
        <Image source={igtv} style={styles.icon} />
        <Image source={mensajes} style={styles.icon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    backgroundColor: "#fff",
  },
  logo: {
    width: 120,
    height: 28,
    resizeMode: "contain",
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
  },
});
