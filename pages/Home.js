import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import Header from "../componentes/Header";
import Feed from "../componentes/Feed";
import Footer from "../componentes/Footer";
import { ObtenerImagenes } from "../services/CatApi";

export default function HomeScreen({ navigation }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchCats = async () => {
      const data = await ObtenerImagenes(12);
      const formattedPosts = data.map((cat, index) => ({
        id: cat.id || `${index}`,
        image: cat.url,
        username: `cat_user_${index + 1}`,
        likes: 120 + index * 19 + Math.floor(Math.random() * 80),
        comments: 20 + index * 3,
        location: ["Buenos Aires", "Córdoba", "Mendoza"][index % 3]}));
      setPosts(formattedPosts);
    };

    fetchCats();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} posts={posts} />
      <Feed posts={posts} navigation={navigation} />
      <Footer navigation={navigation} posts={posts} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  }
});