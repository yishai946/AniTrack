import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, StyleSheet, View } from "react-native";
import Card from "../../../components/Card";
import RowShows from "../../../components/RowShows";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { ScrollView } from "react-native"; // Import ScrollView

export default function Home() {
  const [popular, setPopular] = useState([]);
  const [top, setTop] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPopularShows = async () => {
      try {
        const url =
          "https://api.jikan.moe/v4/anime?limit=25&order_by=popularity";
        const response = await fetch(url, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setPopular(data.data);
        } else {
          console.log("Request failed with status:", response.status);
        }
      } catch (err) {
        console.log(err);
      }
    };

    const fetchTopShows = async () => {
      try {
        const url = "https://api.jikan.moe/v4/top/anime";
        const response = await fetch(url, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setTop(data.data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    const start = () => {
      fetchPopularShows();
      fetchTopShows();
    };

    start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <RowShows title="Popular Shows" data={popular} />
      <RowShows title="Top Shows" data={top} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    marginVertical: 20,
  },
});
