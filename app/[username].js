import { View, Text, Button } from "react-native";
import React from "react";
import { useRouter, useGlobalSearchParams, Stack } from "expo-router";

const profile = () => {
  const router = useRouter();

  const { name, username } = useGlobalSearchParams();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Stack.Screen
        options={{
          title: username,
        }}
      />
      <Text>Hello {username}</Text>

      <Button title="Go back" onPress={() => router.back()} color={'black'} />
    </View>
  );
};

export default profile;
