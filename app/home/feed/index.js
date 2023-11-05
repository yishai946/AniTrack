import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, StyleSheet, View } from "react-native";
import RowShows from "../../../components/RowShows";
import Categories from "../../../components/Categories";
import { ScrollView } from "react-native-gesture-handler";

export default function Home() {
  const [popular, setPopular] = useState([]);
  const [top, setTop] = useState([]);
  const [byCategory, setByCategory] = useState([]);
  const [categoryId, setCategoryId] = useState(1);
  const [categories, setCategories] = useState([]);

  const fetchByUrl = async (url) => {
    try {
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        console.log("Request failed with status:", response.status);
        return null;
      }
    } catch (err) {
      console.error("Error in fetchByUrl:", err);
      return null;
    }
  };

  const changeCategory = async (id) => {
    try {
      setByCategory([]);
      setCategoryId(id);
      const data = await fetchByUrl(
        `https://api.jikan.moe/v4/anime?order_by=popularity&genres=${id}&limit=25&sfw=true`
      );
      if (data) {
        setByCategory(data.data);
      }
    } catch (error) {
      console.error("Error in changeCategory:", error);
    }
  };

  useEffect(() => {
    const fetchPopularShows = async () => {
      try {
        const data = await fetchByUrl(
          "https://api.jikan.moe/v4/anime?limit=25&order_by=popularity&sfw=true"
        );
        if (data) {
          setPopular(data.data);
        }
      } catch (error) {
        console.error("Error in fetchPopularShows:", error);
      }
    };

    const fetchTopShows = async () => {
      try {
        const data = await fetchByUrl(
          "https://api.jikan.moe/v4/top/anime?sfw=true"
        );
        if (data) {
          setTop(data.data);
        }
      } catch (error) {
        console.error("Error in fetchTopShows:", error);
      }
    };

    const fetchCategories = async () => {
      try {
        const data = await fetchByUrl(
          "https://api.jikan.moe/v4/genres/anime?filter=genres"
        );
        if (data) {
          setCategories(data.data);
        }
      } catch (error) {
        console.error("Error in fetchCategories:", error);
      }
    };

    const startCategory = async () => {
      try {
        const data = await fetchByUrl(
          `https://api.jikan.moe/v4/anime?order_by=popularity&genres=1&limit=25&sfw=true`
        );
        if (data) {
          setByCategory(data.data);
        }
      } catch (error) {
        console.error("Error in startCategory:", error);
      }
    };

    const start = () => {
      fetchPopularShows();
      fetchTopShows();
      fetchCategories();
      startCategory();
    };

    start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Categories
          categories={categories}
          id={categoryId}
          changeCategory={changeCategory}
        />
        <RowShows title="By Category" data={byCategory} />
        <RowShows title="Top Shows" data={top} />
        <RowShows title="Popular Shows" data={popular} />
      </ScrollView>
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
