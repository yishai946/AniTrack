import { Tabs } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

export default () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerTitleAlign: "center",
      }}
    >
      <Tabs.Screen
        name="feed"
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
          title: "Feed",
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="search1" size={24} color={color} />
          ),
          title: "Search",
        }}
      />

      <Tabs.Screen
        name="messages"
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="message1" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={24} color={color} />
          ),
          title: 'Profile',
        }}
      />
    </Tabs>
  );
};
