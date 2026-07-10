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
        options={{ headerShown: false }}
        //Header shown false recomendado por ia
      />

      <Stack.Screen
        name="Detalle"
        component={PostDetalle}
      />

      <Stack.Screen
        name="Perfil"
        component={Perfil}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}