import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
export default function Card(props){
  return (
    <View style={styles.container}>
      <Text style={{color:'#d4e2c8'}}>{props.text}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    backgroundColor: '#7ca452',
    padding: 5,
    borderRadius: 7,
    marginHorizontal: 5,
    marginVertical: 3,
  },
});