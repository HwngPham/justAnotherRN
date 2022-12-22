import React from 'react';
import { SafeAreaView } from 'react-native';

export const Layout = ({ style, children }) => (
  <SafeAreaView style={style}>{children}</SafeAreaView>
);
