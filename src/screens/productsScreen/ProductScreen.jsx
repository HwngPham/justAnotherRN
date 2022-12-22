import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BackButton } from '../../core/components/BackButton';
import SettingsItem from './components/SettingItem';

export const ProductScreen = ({ navigation }) => {
  const handleBtnPress = () => {
    navigation.navigate('ProductList');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topTileContainer}>
        <View style={styles.topTileRow}>
          <View style={styles.BackBtn}>
            <TouchableOpacity style={styles.btnArea}>
              <BackButton />
            </TouchableOpacity>
          </View>
          <Text style={styles.screenTitle}>Sản Phẩm</Text>
          <View style={styles.topTileThing} />
        </View>
      </View>
      <View style={styles.mainView}>
        <View style={styles.storeLine}>
          <View style={styles.storeLineRows}>
            <Text>Sản Phẩm</Text>
          </View>
          <View style={styles.storeLineRows} />
        </View>
        {/*  */}
        <SettingsItem icon="shopping-outline" name="Thông tin sản phẩm" details="3" />
        <SettingsItem icon="bell-off-outline" name="Tồn kho" details="0" />
        <TouchableOpacity
          onPress={() => {
            handleBtnPress();
          }}
        >
          <SettingsItem icon="apps" name="Phân loại sản phẩm" details="3" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topTileContainer: {
    flex: 3,
    backgroundColor: '#FFA489',
    flexDirection: 'column-reverse',
    paddingHorizontal: width * 0.05,
    paddingBottom: width * 0.01,
  },
  topTileRow: { flexDirection: 'row', justifyContent: 'space-between' },
  btnArea: {
    width: width * 0.1,
    borderRadius: 12,
    display: 'none',
  },
  BackBtn: {
    width: width * 0.2,
    height: width * 0.06,
    justifyContent: 'center',
  },
  screenTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  topTileThing: {
    backgroundColor: '#5ADCB6',
    width: width * 0.2,
    height: width * 0.06,
    alignSelf: 'flex-end',
    borderRadius: 12,
  },

  mainView: {
    flex: 17,
    paddingBottom: height * 0.09,
  },
  storeLine: {
    height: height * 0.04,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f0',
  },
  storeLineRows: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: width * 0.05,
  },
});
