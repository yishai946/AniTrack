import { View, Text, Button } from "react-native";
import React from "react";
import { useRouter, useGlobalSearchParams } from "expo-router";

const profile = () => {
  const router = useRouter();

  const { name, username } = useGlobalSearchParams();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>
        Hello {username}
      </Text>

      <Button title="Go back" onPress={() => router.back()} />
    </View>
  );
};

export default profile;
