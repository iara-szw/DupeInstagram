import "./Post.css";
import likesIMG from "../assets/likes.png";
import comentarIMG from "../assets/comentar.png";
import mensajesIMG from "../assets/mensajes.png";
import guardarIMG from "../assets/guardar.png";

function Post({ img, user, likes,onOpenModal,post  }) {
  return (
    <View className="post">
      <View className="post-header">
        <View className="usuario">
          <Image
            className="foto-perfil"
            src={img}
            alt=""
          />

          <Text>{user}</Text>
          <span className="tiempo">• 5h</span>
        </View>

        <Text>⋯</Text>
      </View>

      <Image
        className="post-img"
        src={img}
        alt="post"
        onClick={() => onOpenModal(post)}
        style={{ cursor: "pointer" }}
      />

      <View className="BarraOpciones">
        <View className="botones-izq">
          <Image src={likesIMG} alt="" />
          <Image src={comentarIMG} alt="" />
          <Image src={mensajesIMG} alt="" />
        </View>

        <Image src={guardarIMG} alt="" />
      </View>
<View className="extras">

      <Text className="likes">
        {likes} likes
      </Text>
      <Text className="caption">
        <strong>{user}</strong> cat🐱
      </Text>

      <Text className="comentarios">
        Ver los 100 comentarios
      </Text>

      <Text className="add-comment">
        Agregar un comentario
      </Text>
      </View>
    </View>
  );
}

export default Post;