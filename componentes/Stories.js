import { ScrollView, View, Image, Text, StyleSheet } from "react-native";

function Stories({ posts = [] }) {
  const stories = posts.slice(0, 8);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {stories.map((post) => (
        <View key={post.id} style={styles.storyItem}>
          <View style={styles.storyAvatarRing}>
            <Image
              source={{ uri: post.image }}
              style={styles.storyAvatar}
            />
          </View>

          <Text
            style={styles.storyUsername}
            numberOfLines={1}
          >
            {post.username}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  storyItem: {
    alignItems: "center",
  },
  storyAvatarRing: {
    width: 66,
    height: 66,
    borderRadius: 33,
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
    fontSize: 12,
    marginTop: 6,
    width: 66,
    textAlign: "center",
  },
});

export default Stories;