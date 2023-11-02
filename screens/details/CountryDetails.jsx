import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const CountryDetails = ({ navigation }) => {
  const route = useRoute();
  const { item } = route.params.item;
  console.log(item);
  return (
    <View>
      <Text>CountryDetails</Text>
    </View>
  );
};

export default CountryDetails;

const styles = StyleSheet.create({});
