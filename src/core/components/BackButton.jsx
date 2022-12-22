import { StyleSheet, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

export const BackButton = () => {
  return (
    <View style={styles.container}
    >
      <MaterialIcons name="arrow-back-ios" size={24} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12
  }
});

