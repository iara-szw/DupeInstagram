import { useState } from "react";
import { View, Image, Text, StyleSheet,FlatList, Pressable, TouchableOpacity } from "react-native";
import like from "../assets/likes.png";
import comentar from "../assets/comentar.png";
import guardar from "../assets/guardar.png";
import mensajes from "../assets/mensajes.png";

function Post({
  img,
  user,
  likes,
  comments = 0,
  comentarios=[],
  onOpenPost,
  navigation,
  enDetalle = false,
  location = "Buenos Aires",
  post,
}) {
  const [liked, setLiked] = useState(false);
  const [currentLikes, setLikes] = useState(likes);
  const containerStyle = enDetalle ? styles.detalle : styles.post;

  // BLOQUE AGREGADO POR LA IA PARA MANEJAR EL LIKE (correccion post-trabajo)
 const handleLike = () => {
  setLiked((prevLiked) => {
    const newLiked = !prevLiked;
    setLikes((prevLikes) => prevLikes + (newLiked ? 1 : -1));
    return newLiked;
  });
};

  return (
      <Pressable onPress={onOpenPost}>
        <View style={containerStyle}>
          <View style={styles.postHeader}>
            <TouchableOpacity
              style={styles.usuario}
              onPress={() => {
              // recomendado por la ia en comentarios: usar navigate directo porque Perfil está en el mismo stack navigator
              navigation?.navigate?.("Perfil", { posts: [post] });
            }}
          >
            <Image source={{ uri: img }} style={styles.fotoPerfil} />
            <View>
              <Text style={styles.username}>{user}</Text>
              <Text style={styles.tiempo}>{location}</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.menu}>⋯</Text>
        </View>

        <Image source={{ uri: img }} style={styles.postImg} />

        <View style={styles.barraOpciones}>
          <View style={styles.botonesIzq}>
            <TouchableOpacity
              style={styles.iconWithLabel}
              onPress={(event) => {
                handleLike();
              }}
            >
              <Image source={like} style={[styles.botonIcon, liked && styles.iconActive]} />
              {enDetalle ? <Text style={styles.countText}>{currentLikes}</Text> : null}
            </TouchableOpacity>
            <View style={styles.iconWithLabel}>
              <Image source={comentar} style={styles.botonIcon} />
              {enDetalle ? <Text style={styles.countText}>{comments}</Text> : null}
            </View>
            <Image source={mensajes} style={styles.botonIcon} />
          </View>
          <Image source={guardar} style={styles.botonIcon} />
        </View>

        <View style={styles.extras}>
          <Text style={styles.caption}>
            <Text style={styles.usernameInline}>{user}</Text> cat🐱
          </Text>

          {enDetalle ? (
            <>
              <Text style={styles.locationText}>{location}</Text></>
          ) : null}

          {!enDetalle ? (
            <>
              <Text style={styles.likes}>{currentLikes} likes</Text>
              <Text style={styles.comentarios}>Ver los {comments} comentarios</Text>
              <Text style={styles.addComment}>Agregar un comentario</Text>
            </>
          ) : (
                        <>
{/* //Bloque recomendado por la IA, en un principio no funcionaba, modificado por mi para que las varibales de item coincidieran */}
 {comentarios.length > 0 && (
      <FlatList
        data={comentarios}
        keyExtractor={(item) => item.id.toString()}
        scrollEnabled={false}
        style={styles.commentsList}
        renderItem={({ item }) => (
          <View style={styles.commentItem}>
            <Text style={styles.commentUser}>{item.user}</Text>
            <Text style={styles.commentText}>{item.text}</Text>
          </View>
        )}
      />
    )}
            <Text style={styles.detalleText}>Ver los {comments} comentarios</Text>
         
                     </>
)}
        </View>
      </View>
    </Pressable>

  );
}

const styles = StyleSheet.create({
  post: {
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  detalle: {
    marginBottom: 20,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  usuario: {
    flexDirection: "row",
    alignItems: "center",
  },
  fotoPerfil: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  username: {
    fontWeight: "600",
    fontSize: 14,
  },
  tiempo: {
    color: "#999",
    fontSize: 13,
    marginLeft: 4,
  },
  menu: {
    fontSize: 18,
  },
  postImg: {
    width: "100%",
    height: 400,
  },
  barraOpciones: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    
  },
  botonesIzq: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconWithLabel: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 12,
  },
  botonIcon: {
    marginRight: 4,
  },
  iconActive: {
    tintColor: "#ff3040",
  },
  countText: {
    fontSize: 13,
    color: "#333",
  },
  extras: {
    paddingVertical: 3,
  },
  likes: {
    fontWeight: "600",
    fontSize: 13,
    marginBottom: 4,
  },
  caption: {
    fontSize: 13,
    marginBottom: 6,
  },
  usernameInline: {
    fontWeight: "700",
  },
  locationText: {
    color: "#666",
    fontSize: 12,
    marginBottom: 6,
  },
  tagsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 6,
  },
  tagText: {
    color: "#3897f0",
    fontSize: 12,
    marginRight: 8,
  },
  comentarios: {
    color: "#999",
    fontSize: 12,
  },
  addComment: {
    color: "#999",
    fontSize: 12,
  },
  detalleText: {
    color: "#999",
    fontSize: 12,
    marginTop: 2,
  },
  commentsList: {
    flexbox:1,
    display:"flex",
    flexDirection:"column"
  },
  commentItem: {
    flexDirection: "row",
    marginBottom: 4
   },
   commentUser: {
    fontWeight: "700",
    marginRight: 4
   },
   commentText: {
    color: "#333"
   }
});

export default Post;