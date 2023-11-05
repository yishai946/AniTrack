import React, { useEffect, useState } from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
  ActivityIndicator,
} from "react-native";
import Card from "../../components/Card";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

// Enable LayoutAnimation for Android
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const search = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const updateSearch = (text) => {
    setSearch(text);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  const handleSearch = () => {
    // Trigger the search when the "Enter" key is pressed
    searchShow();
  };

  const searchShow = async () => {
    try {
      if (search.length === 0) {
        setResult([]);
        setLoading(false);
        return;
      }
      setLoading(true);
      const response = await fetch(
        `https://www.episodate.com/api/search?q=${search}`
      );
      const data = await response.json();
      setResult(data.tv_shows);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); // Set loading to false in case of an error
    }
  };

  const handleClearSearch = () => {
    setSearch("");
    setResult([]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity onPress={searchShow}>
          <AntDesign name="search1" size={22} color="black" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          onChangeText={updateSearch}
          value={search}
          placeholder="Search..."
          placeholderTextColor="gray"
          // Listen for the "Enter" key press
          onSubmitEditing={handleSearch}
        />
        {search.length !== 0 && (
          <TouchableOpacity onPress={handleClearSearch}>
            <Feather name="x-circle" size={22} color="black" />
          </TouchableOpacity>
        )}
      </View>

      <SafeAreaView style={styles.container}>
        <ScrollView>
          {loading ? (
            <ActivityIndicator
              size="large"
              color="blue"
              style={styles.loadingIndicator}
            />
          ) : result.length > 0 ? (
            <View style={styles.row}>
              {result.map((show, index) => (
                <Card
                  key={index}
                  title={show.name}
                  srcImg={
                    show.image_thumbnail_path !=
                    "https://static.episodate.com/images/no-image.png"
                      ? show.image_thumbnail_path
                      : "no-image"
                  }
                />
              ))}
            </View>
          ) : null}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    marginVertical: 15,
    paddingVertical: 5,
    paddingHorizontal: 20,
    width: "80%",
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  title: {
    fontSize: 20,
    marginTop: 15,
  },
  loadingIndicator: {
    marginTop: 20,
  },
});

export default search;
