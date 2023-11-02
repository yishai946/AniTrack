import { View, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <View>
      <Link href="/home/messages/Yishai" style={styles.messageBox}>
        Yishai
      </Link>
      <Link href="/home/messages/Osher" style={styles.messageBox}>
        Osher
      </Link>
      <Link href="/home/messages/Ori" style={styles.messageBox}>
        Ori
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  messageBox: {
    fontSize: 24,
    margin: 5,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
    paddingVertical: 20,
    textAlign: "center",
  },
});

export default index;
