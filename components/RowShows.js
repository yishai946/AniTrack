import { Text, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import Card from "./Card";

export default function RowShows({ title, data }) {
  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <ScrollView horizontal={true}>
        {data.length > 0 ? (
          data.map((show, index) => (
            <Card
              key={index}
              title={show.title_english}
              srcImg={show.images.jpg.image_url}
            />
          ))
        ) : (
          <ActivityIndicator
            size="large"
            color="blue"
            style={styles.loadingIndicator}
          />
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "left",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    marginHorizontal: 20,
  },
});
