import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import StackNavigator from "./StackNavigator";

export default function App() {
  console.log("App mounted");

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="dark" />
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}