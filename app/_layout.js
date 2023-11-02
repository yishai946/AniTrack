import { Stack, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Alert } from "react-native";

export default () => {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerRight: () => (
            <Ionicons
              onPress={() => router.push("/modal")}
              name="information-circle-outline"
              size={30}
              color="black"
            />
          ),
        }}
      />
      <Stack.Screen
        name="modal"
        options={{
          presentation: "modal",
        }}
      />

      <Stack.Screen name="home" options={{ headerShown: false }} />
    </Stack>
  );
};
