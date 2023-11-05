import React, { useEffect, useState } from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import Card from "../../../components/Card";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function Home() {
  const [popularShows, setPopularShows] = useState([]);

  useEffect(() => {
    const fetchPopularShows = async () => {
      try {
        const url =
          "https://api.jikan.moe/v4/anime?limit=20&order_by=popularity";
        const response = await fetch(url, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log("fetched");
          setPopularShows(data.data);
        } else {
          console.log("Request failed with status:", response.status);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchPopularShows();
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {popularShows.length > 0 ? (
          <View style={styles.row}>
            {popularShows.map((show, index) => (
              <Card
                key={index}
                title={show.title_english}
                srcImg={show.images.jpg.image_url}
              />
            ))}
          </View>
        ) : (
          <Text>Loading...</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    alignItems: "center",
    marginTop: 10,
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
});
