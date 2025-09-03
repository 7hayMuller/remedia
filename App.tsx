import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/store";
import AppRoutes from "./src/navigation";
import { useFonts } from "@expo-google-fonts/inter/useFonts";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    HomemadeApple: require("./assets/fonts/HomemadeApple-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}
