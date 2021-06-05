import React from 'react'
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default class CategoryPage extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			loading: true,
			meals: []
		}
		this.renderMeals = this.renderMeals.bind(this);
	}
	componentDidMount(){
		if(this.state.loading == true){
			fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c="+this.props.route.params.name).then((response)=>{
				return response.json()
			}).then((data)=>{
				this.setState({meals: data.meals, loading: false});
			})
		}
	}
	renderMeals(){
		return this.state.meals.map((meal, index)=>{
			return(
				<TouchableOpacity key={"Meal"+index} onPress={()=>{this.props.navigation.navigate("MealPage", {id: meal.idMeal});}}>
					<View style={styles.Meal}>
						<Text style={styles.MealText}>{meal.strMeal}</Text>
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
			);
		}else{
			return(
				<ScrollView style={styles.Container}>
					{this.renderMeals()}
				</ScrollView>
			);
		}
	}
}

const styles = StyleSheet.create({
	Container: {
		flex: 1,
		backgroundColor: "#fff"
	},
	Meal: {
		margin: 5,
		flexDirection: "row",
		padding: 10,
		height: 60,
		borderWidth: 1,
		borderColor: "#d6d6d6",
		borderRadius: 5
	},
	CategoryText: {
		fontWeight: "bold",
		textAlign: "center"
	}
});