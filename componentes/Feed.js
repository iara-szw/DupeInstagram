import { FlatList, Text, StyleSheet } from "react-native";
import Post from "./Post";
import Stories from "./Stories";

function Feed({ posts = [], navigation }) {
  return posts.length > 0 ? (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      style={styles.list}
      contentContainerStyle={styles.listContent}
      ListHeaderComponent={<Stories posts={posts} />}
      renderItem={({ item }) => (
        <Post
          img={item.image}
          user={item.username}
          likes={item.likes}
          comments={item.comments}
          location={item.location}
          tags={item.tags}
          post={item}
          navigation={navigation}
          onOpenPost={() => navigation.navigate("Detalle", { post: item })}
        />
      )}
    />
  ) : (
    <Text style={styles.emptyText}>Cargando posts...</Text>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 24,
    paddingHorizontal: 10,
  },
  emptyText: {
    padding: 20,
    color: "#666",
  },
});

export default Feed;