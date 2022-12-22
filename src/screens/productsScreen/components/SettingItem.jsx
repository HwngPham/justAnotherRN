import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

const SettingsItem = ({ icon, name, details }) => {
  return (
    <View style={styles.settingsItemContainer}>
      <View style={styles.itemLine}>
        <View style={styles.storeLineRows}>
          <MaterialCommunityIcons name={icon} size={30} color="gray" />
          <Text style={styles.itemName}> {name}</Text>
        </View>
        <View style={styles.storeLineRows}>
          <Text>{details}</Text>
          <MaterialIcons name="arrow-forward-ios" size={24} color="gray" />
        </View>
      </View>
    </View>
  );
};

export default SettingsItem;

const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
  settingsItemContainer: {
    height: width * 0.12,
    marginVertical: 2,
    paddingHorizontal: width * 0.05,
    borderTopColor: "#F0F0F0",
    borderBottomColor: "#F0F0F0",
    borderLeftColor: '#fff',
    borderRightColor: '#fff',
    backgroundColor: '#fff',
    borderWidth: 1,
  },
  itemLine: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemName: {
    color: "gray",
    fontSize: 16,
    paddingLeft: width * 0.01,
  },
  storeLineRows: {
    alignItems: "center",
    flexDirection: "row",
  },
});
