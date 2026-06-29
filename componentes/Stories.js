import "./Stories.css";

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