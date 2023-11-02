import { StyleSheet, Text, View } from "react-native";
import { Link, Redirect, Stack } from "expo-router";

export default function Page() {
  return <Redirect href={'/home'} />
}