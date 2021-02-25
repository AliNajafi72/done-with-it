import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CircleIconComponent from './App/components/circle-icon-component/CircleIconComponent';

import ListItemComponent from './App/components/list-item-component/ListItemComponent';
import ListingDetail from './App/screens/listing-detail-screen/ListingDetail';
import ViewImage from './App/screens/view-image-screen/ViewImage';
import MyAccount from './App/screens/my-account-screen/MyAccount';
import Listing from './App/screens/listing-screen/Listing';
import jacket from './assets/jacket.jpg';

export default function App() {

  return (
    <View style={styles.container}>
      <Listing />
    </View>
  );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
  });