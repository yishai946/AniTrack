import { Stack, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Alert } from "react-native";

export default () => {
  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen name="home" options={{ headerShown: false }} />
    </Stack>
  );
};
