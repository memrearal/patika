import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Filter from "../components/Home/Filter";
import Group from "../components/Home/Group";
import DiyetProgrami from "../components/Home/DiyetProgrami";

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
				<Group title="Diyetlerim">
					<DiyetProgrami data={{name: "Diyet Programı 1", avatar: "1", date:"19:31", menu: "Makarna..."}} />
					<DiyetProgrami data={{name: "Diyet Programı 2", avatar: "2", date:"18:09", menu: "Salata..."}} />
				</Group>
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