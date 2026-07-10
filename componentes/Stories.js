import { FlatList, View, Image, Text, StyleSheet } from "react-native";

function Stories({ posts = [] }) {
  const stories = posts.slice(0, 8);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
      data={stories}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.storyItem}>
          <View style={styles.storyAvatarRing}>
            <Image source={{ uri: item.image }} style={styles.storyAvatar} />
          </View>
          <Text style={styles.storyUsername} numberOfLines={1}>
            {item.username}
          </Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  storyItem: {
    alignItems: "center",
    marginRight: 12,
    marginBottom: 20,
  },
  storyAvatarRing: {
    width: 68,
    height: 68,
    borderRadius: 34,
    borderWidth: 2,
    borderColor: "#ff6b9d",
    justifyContent: "center",
    alignItems: "center",
  },
  storyAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  storyUsername: {
    fontSize: 11,
    width: 66,
    textAlign: "center",
    color: "#444",
  },
});

export default Stories;