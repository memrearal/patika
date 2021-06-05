import React from 'react'
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'

export default class Home extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			loading: true,
			categories: []
		}
		this.renderCategories = this.renderCategories.bind(this);
	}
	componentDidMount(){
		if(this.state.loading == true){
			fetch("https://www.themealdb.com/api/json/v1/1/categories.php").then((response)=>{
				return response.json()
			}).then((data)=>{
				this.setState({categories: data.categories, loading: false});
			})
		}
	}
	renderCategories(){
		return this.state.categories.map((category, index)=>{
			return(
				<TouchableOpacity key={"Category"+index} onPress={()=>{this.props.navigation.navigate("CategoryPage", {id: category.idCategory, name: category.strCategory})}}>
					<View style={styles.Category}>
						<Image source={{uri: category.strCategoryThumb}} style={styles.CategoryImage} />
						<Text style={styles.CategoryText}>{category.strCategory}</Text>
					</View>
				</TouchableOpacity>
			)
		})
	}
	render(){
		if(this.state.loading == true){
			return(
				<View style={styles.Container}>
					<Text style={styles.CategoryText}>LOADING</Text>
				</View>
			)
		}
		return(
			<ScrollView style={styles.Container}>
				{this.renderCategories()}
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	Container: {
		flex: 1,
		backgroundColor: "#fff"
	},
	Category: {
		margin: 5,
		flexDirection: "row",
		padding: 10,
		height: 60,
		borderWidth: 1,
		borderColor: "#d6d6d6",
		borderRadius: 5
	},
	CategoryImage: {
		height: 40,
		width: 40,
		borderRadius: 40,
		marginRight: 10
	},
	CategoryText: {
		fontWeight: "bold",
		textAlign: "center"
	}
});