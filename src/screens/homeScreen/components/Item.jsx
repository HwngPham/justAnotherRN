import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const { width, height } = Dimensions.get('window')
const numOfCol = 3;
const data = [
  {
    tilte: "Title",
    cost: "1000",
    note1: "1 l 100",
    note2: "2 l 3",
  },
  {
    tilte: "Title",
    cost: "1000",

    reminder: "lightyellow",
  },
  {
    tilte: "Title",
    cost: "2000",

    reminder: "orange",
  },
  {
    tilte: "Title",
    cost: "2000",

    reminder: "lightgreen",
  },
  {
    tilte: "Title",
    cost: "2000",

    reminder: "lightgreen",
  },
  {
    tilte: "Title23423",
    cost: "1000",

    reminder: "lightyellow",
  },
  {
    tilte: "Title",
    cost: "1000",

    reminder: "lightyellow",
  },
  {
    tilte: "Title",
    cost: "2000",
  },
  {
    tilte: "Title",
    cost: "2000",
  },
];

const formatData = () => {
  const numOfFullRows = Math.floor(data.length / numOfCol);
  let numOfElementsLastRow = data.length - numOfFullRows * numOfCol;
  while (numOfElementsLastRow !== numOfCol && numOfElementsLastRow !== 0) {
    data.push({
      tilte: `blank-${numOfElementsLastRow}`,
      cost: `blank-${numOfElementsLastRow}`,
      note: `blank-${numOfElementsLastRow}`,
      reminder: `blank-${numOfElementsLastRow}`,
      empty: true,
    });
    numOfElementsLastRow += 1;
  }
  return data;
};

export const HomeItem = () => {
  const renderItem = ({ item }) => {
    if (item.empty === true) {
      return (
        <View
          style={(styles.tblContainer, styles.tblContainerInvisible)}
        /> 
      );
    }
    return (
      <View style={styles.tblContainer}>
        <View style={styles.screenBtn}>
          <TouchableOpacity
            style={{
              backgroundColor: '#fff',
              flex: 1,

              marginVertical: width * 0.01,
              marginHorizontal: 1,

              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View style={styles.row1}>
              <FontAwesome5 name="money-bill-alt" size={16} color="gray" />
              <Text style={{ fontSize: 16, color: "gray" }}> {item.tilte}</Text>
            </View>
            <View>
              <Text style={{ fontSize: 16, color: "red", fontWeight: "700" }}>
                {item.cost} VND
              </Text>
            </View>

            <Text> {item.note1} </Text>
            <Text> {item.note2} </Text>
            <Text> {item.reminder} </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <FlatList
          style={styles.FlatList}
          data={formatData(data, numOfCol)}
          renderItem={renderItem}
          numColumns={numOfCol}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainView: {},
  //   toptile: {
  //     flex: 3,
  //     backgroundColor: "yellow",
  //     flexDirection: "row",
  //   },
  FlatList: {},

  screenBtn: {
    flex: 1,
    height: width * 0.3,
    // backgroundColor: "",
    flexDirection: "row",
  },
  btn1: {
    flex: 1,
    backgroundColor: "pink",
    borderRadius: 12,
    margin: height * 0.01,
    flexDirection: "row",
    alignItems: "center",
  },
  btnImg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnName: {
    flex: 2,
  },
  tblContainer: {
    // backgroundColor: "lightgreen",
    flex: 1,
  },
  tblContainerInvisible: {
    backgroundColor: "transparent",
    flex: 1,
  },
  row1: {
    flexDirection: "row",
    alignItems: "center",
  },
  storeLineRows: {
    alignItems: "center",
    flexDirection: "row",
  },
});
