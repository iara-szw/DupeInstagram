import { useState } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import "./feed.css";

function Feed({ posts = [], navigation }) {
  return (
    <>
        {posts.length > 0 ? (
           <FlatList
                data={posts}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (<Post img={item.image} user={item.username} likes={item.likes} post={item} onOpenPost={() => navigation.navigate("Detalle", {post: item,})} />
                 )}
             />
        ) : (
          <Text>Cargando posts...</Text>
        )}
    </>
  );
}

export default Feed;