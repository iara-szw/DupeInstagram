import { View, Image, Text, StyleSheet, Pressable } from "react-native";

function Post({ img, user, likes, post, onOpenPost }) {
  return (
    <Pressable onPress={onOpenPost}>
      <View style={styles.post}>
        <View style={styles.postHeader}>
          <View style={styles.usuario}>
            <Image
              source={{ uri: img }}
              style={styles.fotoPerfil}
            />
            <Text style={styles.username}>{user}</Text>
            <Text style={styles.tiempo}>• 5h</Text>
          </View>
          <Text style={styles.menu}>⋯</Text>
        </View>

        <Image
          source={{ uri: img }}
          style={styles.postImg}
        />

        <View style={styles.barraOpciones}>
          <View style={styles.botonesIzq}>
            <Text style={styles.botonIcon}>❤️</Text>
            <Text style={styles.botonIcon}>💬</Text>
            <Text style={styles.botonIcon}>✈️</Text>
          </View>
          <Text>🔖</Text>
        </View>

        <View style={styles.extras}>
          <Text style={styles.likes}>{likes} likes</Text>
          <Text style={styles.caption}>
            <Text style={{ fontWeight: "bold" }}>{user}</Text> cat🐱
          </Text>
          <Text style={styles.comentarios}>Ver los 100 comentarios</Text>
          <Text style={styles.addComment}>Agregar un comentario</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  post: {
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  usuario: {
    flexDirection: "row",
    alignItems: "center",
  },
  fotoPerfil: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  username: {
    fontWeight: "600",
    fontSize: 14,
  },
  tiempo: {
    color: "#999",
    fontSize: 13,
    marginLeft: 4,
  },
  menu: {
    fontSize: 18,
  },
  postImg: {
    width: "100%",
    height: 400,
  },
  barraOpciones: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  botonesIzq: {
    flexDirection: "row",
  },
  botonIcon: {
    marginRight: 12,
  },
  extras: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  likes: {
    fontWeight: "600",
    fontSize: 13,
    marginBottom: 4,
  },
  caption: {
    fontSize: 13,
    marginBottom: 4,
  },
  comentarios: {
    color: "#999",
    fontSize: 12,
  },
  addComment: {
    color: "#999",
    fontSize: 12,
  },
});

export default Post;