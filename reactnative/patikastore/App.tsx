import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, TextInput, StyleSheet, Text, View } from 'react-native';

import ProductsList from './Products.json';
import Product from './Product';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        ListHeaderComponent={() => (
          <View>
            <Text style={styles.headerText}>PATIKASTORE</Text>
            <TextInput style={styles.search} placeholder="Arama..." />
          </View>
        )}
        style={styles.flatList}
        data={ProductsList}
        renderItem={(item) => {return(<Product product={item} />)}}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10
  },
  headerText: {
    color: '#800080',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  flatList: {
    backgroundColor: 'white',
  },
  search: {
    backgroundColor: '#eceff1',
    borderRadius: 5,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    height: 50
  },
});