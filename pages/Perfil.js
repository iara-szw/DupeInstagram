import { useState } from "react";
import InfoUsu from "../assets/InfoUsuario";
import { FlatList } from "react-native-web";

function Profile({ posts = [] }) {
//   const [selectedPost, setSelectedPost] = useState(null);

//   const profilePic = posts[0]?.image || "";

  return (
      <>
      <View className="profile-header">
        <View className="profile-pic-wrapper">
          <Image
            className="profile-pic"
            src={profilePic}
            alt={InfoUsu.username}
          />
        </View>
        </View>

        <View className="profile-details">
          <View className="profile-top-row">
            <Text className="profile-handle">{InfoUsu.username}</Text>
            <Button className="btn-edit">Edit profile</Button>
            <Button className="btn-settings">Configuracion</Button>
          </View>

          <View className="profile-stats">
            <Text>{posts.length} posts</Text>
            <Text>{InfoUsu.followers.toLocaleString()} followers</Text>
            <Text>{InfoUsu.following} following</Text>
          </View>

          <View className="profile-bio">
            <Text className="profile-fullname">{InfoUsu.fullName}</Text>
            <Text className="profile-bio-text">{InfoUsu.bio}</Text>
            <Text className="profile-website" href="#">{InfoUsu.website}</Text>
          </View>
      </View>

      <View className="profile-tabs">
        <Button className="profile-tab profile-tab--active">
          <span></span>POSTS
        </Button>
        <Button className="profile-tab">
          <span></span>SAVED
        </Button>
        <Button className="profile-tab">
          <span></span>TAGGED
        </Button>
      </View>

      <View className="profile-grid">
        <FlatList
                       data={posts}
                       keyExtractor={(item) => item.id.toString()}
                       showsVerticalScrollIndicator={false}
                       renderItem={({ item }) => (<Post img={item.image} user={item.username} likes={item.likes} post={item} onOpenPost={() => navigation.navigate("Detalle", {post: item,})} />
                        )}
                    />

      </View>
</>
  )
}
export default Profile