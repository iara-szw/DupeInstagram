import { View, Image, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import InfoUsu from "../assets/InfoUsuario";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "../componentes/Footer";
import menu from "../assets/Menu.png";
function Profile({ navigation, route, posts = [] }) {
  // Usar la primera imagen del perfil como avatar principal
  const profilePosts = route?.params?.posts ?? posts;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileHeaderTop}>
        <Text style={styles.profileTitle}>{InfoUsu.username}</Text>
        <Image source={menu} style={styles.profileMenu} />
      </View>

      <View style={styles.topHeader}>
        <View style={styles.headerLeft}>
          {/* Avatar del perfil: primera imagen de profilePosts */}
          <Image
            source={profilePosts[0] ? { uri: profilePosts[0].image } : require("../assets/guardar.png")}
            style={styles.avatar}
          />

          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Text style={styles.statValue}>{profilePosts.length}</Text>
              <Text style={styles.statLabel}>Posts</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statValue}>{InfoUsu.followers.toLocaleString()}</Text>
              <Text style={styles.statLabel}>Seguidores</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statValue}>{InfoUsu.following}</Text>
              <Text style={styles.statLabel}>Seguidos</Text>
            </View>
          </View>
        </View>

        <View style={styles.userMeta}>
          <Text style={styles.fullName}>{InfoUsu.fullName}</Text>
          <Text style={styles.bio}>{InfoUsu.bio}</Text>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Editar perfil</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.sectionDivider} />

      <FlatList
        data={profilePosts}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.gridContent}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => navigation.navigate("Detalle", { post: item })}
          >
            <Image source={{ uri: item.image }} style={styles.gridImage} />
          </TouchableOpacity>
        )}
      />
      <Footer navigation={navigation} route={route} posts={profilePosts} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  profileHeaderTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    backgroundColor: "#fff",
  },
  profileTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 150,
  },
  profileMenu: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  topHeader: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
    backgroundColor: "#fff",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 1,
    borderColor: "#ddd",
    marginRight: 16,
  },
  userMeta: {
    width: "100%"
    },
  username: {
    fontSize: 18,
    fontWeight: "700",
  },
  fullName: {
    color: "#333",
    marginTop: 4,
    fontSize: 13,
  },
  bio: {
    color: "#666",
    marginTop: 5,
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 12
  },
  statsRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statBox: {
    width: 80,
    alignItems: "center",
  },
  statValue: {
    fontWeight: "700",
    fontSize: 15,
  },
  statLabel: {
    color: "#666",
    fontSize: 12,
    marginTop: 2,
  },
  editButton: {
    marginTop: 6,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  editButtonText: {
    fontWeight: "600",
  },
  sectionDivider: {
    height: 1,
    backgroundColor: "#f0f0f0",
    marginTop: 4,
    
  },
  gridContent: {
    paddingHorizontal: 1,
  },
  gridItem: {
    flex: 1 / 3,
    padding: 1,
  },
  gridImage: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 0.5,
  },
});

export default Profile;