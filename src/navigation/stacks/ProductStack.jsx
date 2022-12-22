import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductScreen } from '../../screens/productsScreen/ProductScreen';
import { ProductList } from '../../screens/productsScreen/components/ProductList';
import { AddProduct } from '../../screens/productsScreen/components/AddProduct';

const Stack = createNativeStackNavigator();

export const ProductStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="ProductScreen" component={ProductScreen} options={{ headerShown: false }} />
    <Stack.Screen name="ProductList" component={ProductList} options={{ headerShown: false }} />
    <Stack.Screen name="AddProdCate" component={AddProduct} options={{ headerShown: false }} />
  </Stack.Navigator>
);
