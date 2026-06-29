import { useEffect, useState } from "react";
import {View, FlatList,StyleSheet} from "react-native";
import Stories from "../components/Stories";
import Feed from "../components/Feed";
import Header from "../components/Header";

import { ObtenerImagenes } from "../services/CatAPI";

export default function HomeScreen({ navigation }) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
    const fetchCats = async () => {
      const data = await ObtenerImagenes();
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
            <Header navigation={navigation}
            />

            <FlatList ListHeaderComponent={<Stories posts={posts}/>}
                data={posts}
                keyExtractor={(item)=>item.id}
                renderItem={({item})=>(
                <FeedItem post={item} onPress={()=>navigation.navigate("Detalle",{post:item})}/>)}

            />

        </View>

    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});