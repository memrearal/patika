import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons'; 

export default class Header extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			loading: true
		};
	}
	render(){
		return(
			<View style={styles.HeaderContainer}>
				<View style={styles.HeaderContent}>
					<TouchableOpacity onPress={()=>{this.props.navigation.navigate("ProgramOlustur")}}><Ionicons name="ios-add-outline" size={20} color="#06c" /></TouchableOpacity>
					<View style={styles.Center}>
						<Text style={styles.Title}>Diyetim</Text>
					</View>
					<TouchableOpacity onPress={()=>{this.props.navigation.navigate("Bildirimlerim")}}><Ionicons name="notifications-outline" size={20} color="#06c" /></TouchableOpacity>
				</View>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	HeaderContainer: {
		height: 80,
		paddingTop: Constants.statusBarHeight-30,
		backgroundColor: "#f9f9f9",
		borderBottomWidth: 0.5,
		borderBottomColor: "#e6e6e6"
	},
	HeaderContent: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginTop: 40,
		marginHorizontal: 20
	},
	Title: {
		textAlign: "center",
		fontSize: 14,
		color: "#000"
	},
	Group: {
		textAlign: "center",
		color: "#06c",
		fontSize: 12
	}
})