import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import home from "../assets/home.png";
import mas from "../assets/mas.png";
import buscar from "../assets/buscar.png";
import likes from "../assets/likes.png";
export default function Footer({ navigation, route, posts = [] }) {
  // Footer usa la primera imagen de profilePosts para el avatar del perfil
  const profilePosts = route?.params?.posts ?? posts;

  return (
    <View style={styles.header}>
      {/* Recomendado por la IA y aprobado: navegar a Home al tocar el botón home */}
      <TouchableOpacity onPress={() => navigation.navigate("Home")}> 
        <Image source={home} style={styles.icon} />
      </TouchableOpacity>

      <Image source={buscar} style={styles.icon} />
      <Image source={mas} style={styles.icon} />
      <Image source={likes} style={styles.icon} />

      {/* Recomendado por la IA y aprobado: navegar a Perfil al tocar el avatar del footer */}
      <TouchableOpacity onPress={() => navigation.navigate("Perfil", { posts: profilePosts })}>
        <Image
          source={profilePosts[0] ? { uri: profilePosts[0].image } : require("../assets/guardar.png")}
          style={styles.avatar}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    backgroundColor: "#fff",
    marginTop: "auto",
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#ddd",
  },
});
