import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Product(props){
    const product = props.product.item;
    var inStock = product.inStock;
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.logo}
                    source={{uri: product.imgURL}}
                    resizeMode = 'stretch'
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>{product.price}</Text>
                { !inStock && (
                    <Text style= {styles.inStock}>STOKTA YOK</Text>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:10,
        marginTop:10,
        marginLeft:5,
        marginRight:5,
        backgroundColor: '#eceff1',
        borderRadius: 5,
        height: 200
    },
    imageContainer: {
        flex: 1
    },
    textContainer: {
        flex: 2,
        justifyContent: 'space-between'
    },
    logo: {
        height : 100,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    price: {
        color: '#808080',
        fontWeight: '700'
    },
    inStock: {
        color: 'red',
        fontSize: 14,
        fontWeight: 'bold',
    }
});