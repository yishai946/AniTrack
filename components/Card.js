import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const Card = ({ title, srcImg, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={onPress}>
      {srcImg != "no-image" && (
        <Image source={{ uri: srcImg }} style={styles.image} />
      )}
      {srcImg == "no-image" && (
        <View style={styles.noImage}>
          <Feather
            name="image"
            size={70}
            color="black"
          />
        </View>
      )}
      <View style={styles.cardContent}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const cardWidth = 150;
const cardHeight = 220; 

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    margin: 10,
    paddingBottom: 10,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    shadowOpacity: 1,
    backgroundColor: "white",
    width: cardWidth,
    height: cardHeight,
  },
  image: {
    width: "100%",
    height: "85%", // Adjust the percentage as needed to fit your design
    resizeMode: "cover",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardContent: {
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 18,
  },
  noImage: {
    width: "100%",
    height: "85%",
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Card;
