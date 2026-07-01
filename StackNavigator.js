import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import PostDetalle from "./pages/PostDetalle";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Instagram" }}
      />

      <Stack.Screen
        name="Detalle"
        component={PostDetalle}
      />

      <Stack.Screen
        name="Perfil"
        component={Perfil}
      />
    </Stack.Navigator>
  );
}