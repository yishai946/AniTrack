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

export default function Search() {
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
      setLoading(true); // Set loading to true
      const url = `https://api.jikan.moe/v4/anime?q=${search}&order_by=popularity&sort=asc&sfw=false`;
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setResult(data.data);
      } else {
        console.log("Request failed with status:", response.status);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false); // Set loading to false when done
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
          onSubmitEditing={handleSearch}
        />
        {search.length !== 0 && (
          <TouchableOpacity onPress={handleClearSearch}>
            <Feather name="x-circle" size={22} color="black" />
          </TouchableOpacity>
        )}
      </View>

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
                title={show.title_english}
                srcImg={show.images.jpg.image_url}
              />
            ))}
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}

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
  loadingIndicator: {
    marginTop: 20,
  },
});
