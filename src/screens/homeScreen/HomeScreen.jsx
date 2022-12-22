import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BackButton } from '../../core/components/BackButton';
import { HomeItem } from './components/Item';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topTileContainer}>
        <View style={styles.topTileRow}>
          <View style={styles.BackBtn}>
            <View style={styles.btnArea}>
              <BackButton />
            </View>
          </View>
          <Text style={styles.screenTitle}>Home Screen</Text>
          <View style={styles.topTileThing} />
        </View>
      </View>
      <View style={styles.mainView}>
        <View style={styles.storeLine}>
          <View style={styles.storeLineRows}>
            <Ionicons name="home" size={18} color="black" />
            <Text>Kiwi-Store</Text>
          </View>
          <View style={styles.storeLineRows}>
            <Text>+8463521272</Text>
            <Ionicons name="power" size={16} color="red" />
          </View>
        </View>
        {/*  */}
        <View style={styles.storeLine1}>
          <View style={styles.storeLineRows}>
            <Text>Tổng quan</Text>
          </View>
          <View style={styles.storeLineRows}>
            <TouchableOpacity>
              <Text> Hôm qua </Text>
            </TouchableOpacity>

            <Text>l</Text>
            <TouchableOpacity>
              <Text> Hôm nay </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/*  */}
        <HomeItem />
        <View style={styles.reports}>
          <TouchableOpacity style={styles.reportBtn1}>
            <Ionicons name="ios-fast-food-outline" size={50} color="gray" />
            <Text>Báo cáo đơn hàng</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.reportBtn2}>
            <Ionicons name="person-outline" size={50} color="gray" />
            <Text>Báo cáo thành viên</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.reportBtn3}>
            <Ionicons name="ios-card-outline" size={50} color="gray" />
            <Text>Báo cáo thanh toán</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topTileContainer: {
    flex: 3,
    backgroundColor: '#FFA489',
    flexDirection: "column-reverse",
    paddingHorizontal: width * 0.05,
    paddingBottom: width * 0.01,
  },
  topTileRow: { flexDirection: "row", justifyContent: "space-between" },
  btnArea: {
    width: width * 0.1,
    borderRadius: 12,
    display: "none",
  },
  BackBtn: {
    width: width * 0.2,
    height: width * 0.06,
    justifyContent: "center",
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: "700",
  },
  topTileThing: {
    backgroundColor: '#5ADCB6',
    width: width * 0.2,
    height: width * 0.06,
    alignSelf: "flex-end",
    borderRadius: 12,
  },

  mainView: {
    flex: 17,
    backgroundColor: "#f0f0f0f0",

    paddingBottom: height * 0.09,
  },
  storeLine: {
    height: height * 0.04,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: '#fff',
    paddingHorizontal: width * 0.05,
    marginBottom: 2,
  },
  storeLine1: {
    height: height * 0.05,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f0f0f0f0",
    paddingHorizontal: width * 0.05,
    marginBottom: 2,
  },
  storeLineRows: {
    alignItems: "center",
    flexDirection: "row",
  },
  reports: {
    width: width * 1,
    height: width * 0.3,
    marginTop: width * 0.02,
    flexDirection: "row",
  },
  reportBtn1: {
    width: width / 3,
    height: width * 0.3,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
  },
  reportBtn2: {
    width: width / 3,
    height: width * 0.3,
    backgroundColor: '#fff',
    borderLeftColor: "#f0f0f0f0",
    borderRightColor: "#f0f0f0f0",
    borderTopColor: '#fff',
    borderBottomColor: '#fff',
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  reportBtn3: {
    width: width / 3,
    height: width * 0.3,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
  },
});

