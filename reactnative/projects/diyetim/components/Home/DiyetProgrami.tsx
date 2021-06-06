import React from 'react'
import Styles from '../../constants/Styles';
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import { Ionicons, Feather  } from '@expo/vector-icons'; 

export default class Chat extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			loading: true
		}
	}
	render(){
		const { menu, name, avatar, date } = this.props.data;
		return(
			<View style={styles.Container}>
				<View style={styles.Avatar}>
					<Text style={styles.AvatarChar}>{avatar}</Text>
				</View>
				<View style={styles.Content}>
					<View style={styles.Row}>
						<Text style={styles.Title}>{name}</Text>
						<Text style={styles.Date}>{date}</Text>
					</View>
					<View style={styles.Row}>
						<Text style={styles.Menu}>{menu}</Text>
					</View>
				</View>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	Container: {
		margin: 5,
		flexDirection: "row"
	},
	Avatar: {
		padding: 5
	},
	AvatarImage: {
		width: 50,
		height: 50,
		borderRadius: 5
	},
	AvatarChar: {
		backgroundColor: "#e2ab52",
		color: "#fff",
		textAlign: "center",
		width: 50,
		height: 50,
		paddingTop: 8,
		fontSize: 25,
		borderRadius: 5
	},
	Content: {
		flexDirection: "column",
		margin: 5,
	},
	Row: {
		flexDirection: "row",
		alignSelf: "stretch"
	},
	Title: {
		fontWeight: "bold",
		flexWrap: "nowrap",
		fontSize: 16,
		color: "#000",
		width: Dimensions.get("window").width-160
	},
	Date: {
		textAlign: "right",
		width: 80,
		fontSize: 14,
		color: "#06c"
	},
	Menu: {
		fontSize: 14,
		color: "#000"
	}
});