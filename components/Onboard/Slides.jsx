import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./slides.style";

const Slides = ({ item }) => {
  return (
    <View>
      <Image source={item.image} style={styles.image} />
      <View style={styles.stack}>
        <Text>random text</Text>
      </View>
    </View>
  );
};

export default Slides;
