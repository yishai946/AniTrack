import { StyleSheet, Text, View } from "react-native";
import { Link, Stack } from "expo-router";

export default function feed() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={{ fontSize: 20, textAlign: "center" }}>Feed</Text>
        <Link href="/yishai" style={styles.Link}>
          Open profile
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Link: {
    fontSize: 20,
    marginVertical: 24,
    fontWeight: "bold",
  },
});
