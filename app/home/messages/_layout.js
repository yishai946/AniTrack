import { Stack } from "expo-router";

export default () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Messages", headerTitleAlign: "center" }}
      />
    </Stack>
  );
};
