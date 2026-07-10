import { StyleSheet, ScrollView, View, Text } from "react-native";
import Post from "../componentes/Post";
const comentarios=[
  {id:1, user:"cat_user_2", text:"¡Qué lindo gato!"},
  {id:2, user:"cat_user_3", text:"Me encanta esta foto."},
  {id:3, user:"cat_user_4", text:"¡Qué adorable!"} 
]
//Comentarios generados por IA
export default function PostDetalle({ route }) {
  const { post } = route.params;

  return (
      <ScrollView contentContainerStyle={styles.content}>
        <Post
          img={post.image}
          user={post.username}
          likes={post.likes}
          comments={post.comments ?? 100}
          comentarios={comentarios}
          location={post.location}
          tags={post.tags}
          post={post}
          enDetalle={true}
        />
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 12,
    paddingBottom: 24,
  }
  });
