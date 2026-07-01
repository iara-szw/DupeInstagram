import { View, Image, Text, StyleSheet, ScrollView, Pressable } from "react-native";

export default function PostDetalle({ route, navigation }) {
  const { post } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>← Atrás</Text>
        </Pressable>
      </View>

      <Image source={{ uri: post.image }} style={styles.postImage} />

      <View style={styles.infoContainer}>
        <View style={styles.userInfo}>
          <Image
            source={{ uri: post.image }}
            style={styles.profilePic}
          />
          <View>
            <Text style={styles.username}>{post.username}</Text>
            <Text style={styles.timestamp}>5 horas</Text>
          </View>
          <Text style={styles.menuDots}>⋯</Text>
        </View>

        <View style={styles.actionBar}>
          <View style={styles.leftActions}>
            <Text style={styles.actionIcon}>❤️</Text>
            <Text style={styles.actionIcon}>💬</Text>
            <Text style={styles.actionIcon}>✈️</Text>
          </View>
          <Text style={styles.actionIcon}>🔖</Text>
        </View>

        <View style={styles.statsContainer}>
          <Text style={styles.likes}>{post.likes} likes</Text>
          <Text style={styles.caption}>
            <Text style={{ fontWeight: "bold" }}>{post.username}</Text> cat🐱
          </Text>
          <Text style={styles.commentsLink}>Ver los 100 comentarios</Text>
          <Text style={styles.timestamp}>5 horas</Text>
        </View>

        <View style={styles.commentSection}>
          <Text style={styles.addCommentText}>Agregar un comentario...</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  backButton: {
    fontSize: 16,
    color: "#0095f6",
    fontWeight: "600",
  },
  postImage: {
    width: "100%",
    height: 500,
    backgroundColor: "#f0f0f0",
  },
  infoContainer: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  profilePic: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  username: {
    fontWeight: "600",
    fontSize: 14,
  },
  timestamp: {
    color: "#999",
    fontSize: 12,
  },
  menuDots: {
    fontSize: 18,
    marginLeft: "auto",
  },
  actionBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 8,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  leftActions: {
    flexDirection: "row",
    gap: 16,
  },
  actionIcon: {
    fontSize: 20,
  },
  statsContainer: {
    marginVertical: 8,
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
  commentsLink: {
    color: "#999",
    fontSize: 12,
    marginBottom: 4,
  },
  commentSection: {
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    paddingVertical: 12,
    marginTop: 12,
  },
  addCommentText: {
    color: "#999",
    fontSize: 13,
  },
});
