import { FlatList, View, Text } from "react-native";
import Post from "./Post";

function Feed({ posts = [], navigation }) {
  return (
    <>
      {posts.length > 0 ? (
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Post
              img={item.image}
              user={item.username}
              likes={item.likes}
              post={item}
              onOpenPost={() => navigation.navigate("Detalle", { post: item })}
            />
          )}
        />
      ) : (
        <Text>Cargando posts...</Text>
      )}
    </>
  );
}

export default Feed;