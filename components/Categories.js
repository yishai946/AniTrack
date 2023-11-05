import { ScrollView, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const Categories = ({ categories, id, changeCategory }) => {
  return (
    <ScrollView
      horizontal={true}
      style={styles.container}
      showsHorizontalScrollIndicator={false}
    >
      {categories.map(
        (category, index) =>
          category.name !== "Boys Love" &&
          category.name !== "Girls Love" && (
            <TouchableOpacity
              key={index}
              style={id === category.mal_id ? styles.active : styles.button}
              onPress={() => changeCategory(category.mal_id)} // Use a function reference
            >
              <Text
                style={id === category.mal_id ? styles.nameActive : styles.name}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          )
      )}
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 15,
    margin: 5,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  active: {
    paddingHorizontal: 15,
    margin: 5,
    backgroundColor: "black",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    color: "black",
    fontSize: 17,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  nameActive: {
    color: "white",
    fontSize: 17,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  container: {
    marginVertical: 10,
  },
});
