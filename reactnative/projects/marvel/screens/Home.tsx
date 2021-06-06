import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Home extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			loading: true
		}
	}
	render(){
		return(
			<View style={styles.Container}>
				
			</View>
		);
	}
}

const styles = StyleSheet.create({
	Container: {
		flex: 1,
		backgroundColor: "#fff"
	}
});