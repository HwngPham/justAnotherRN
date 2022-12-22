/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Octicons, Feather, FontAwesome } from '@expo/vector-icons';
import { Dimensions, StyleSheet } from 'react-native';
import { OrderScreen } from '../screens/orderScreen/OrderScreen';
import { HomeScreen } from '../screens/homeScreen/HomeScreen';
import { SettingsScreen } from '../screens/settingsScreen/SettingsScreen';
import { ProductStack } from './stacks/ProductStack';

const MainNavigator = createBottomTabNavigator();
const { width, height } = Dimensions.get('window');

const MainNavigation = () => {
  return (
    <MainNavigator.Navigator screenOptions={styles.screenOptions}>
      <MainNavigator.Screen
        options={{
          tabBarIcon: ({ size, color }) => <Octicons name="home" size={size} color={color} />,
        }}
        name="Home"
        component={HomeScreen}
      />
      <MainNavigator.Screen
        options={{
          tabBarIcon: ({ size, color }) => <Octicons name="checklist" size={size} color={color} />,
        }}
        name="Order"
        component={OrderScreen}
      />

      <MainNavigator.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="shopping-bag" size={size} color={color} />
          ),
        }}
        name="ProductStack"
        component={ProductStack}
      />
      <MainNavigator.Screen
        options={{
          tabBarIcon: ({ size, color }) => <Feather name="settings" size={size} color={color} />,
          tabBarLabel: () => null,
        }}
        name="Settings"
        component={SettingsScreen}
      />
    </MainNavigator.Navigator>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({
  screenOptions: {
    headerShown: false,
    tabBarActiveTintColor: '#57DAE0',
    tabBarInactiveTintColor: '#ffffff',
    tabBarStyle: {
      marginBottom: height * 0.02,
      marginHorizontal: width * 0.05,
      borderRadius: 24,
      position: 'absolute',
      overflow: 'hidden',
      backgroundColor: '#FFA45E',
      borderWidth: 1,
      borderColor: '#ffffff',
    },
  },
});
