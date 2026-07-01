import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Stories from "../componentes/Stories";
import Header from "../componentes/Header";
import Feed from "../componentes/Feed";

import { ObtenerImagenes } from "../services/CatApi";

export default function HomeScreen({ navigation }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchCats = async () => {
      const data = await ObtenerImagenes();
      console.log("CatApi data length", data.length);
      const formattedPosts = data.map((cat, index) => ({
        id: cat.id,
        image: cat.url,
        username: `cat_user_${index}`,
        likes: Math.floor(Math.random() * 1000),
      }));
      setPosts(formattedPosts);
    };
    fetchCats();
  }, []);

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <Text style={styles.debugText}>{posts.length ? `Posts: ${posts.length}` : "Cargando..."}</Text>
      <Stories posts={posts} />
      <Feed posts={posts} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  debugText: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: "#111",
  },
});