import React from 'react'
import { Linking, ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'

export default class CategoryPage extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			loading: true,
			info: {},
		}
	}
	componentDidMount(){
		if(this.state.loading == true){
			fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+this.props.route.params.id).then((response)=>{
				return response.json()
			}).then((data)=>{
				this.setState({info: data.meals[0], loading: false});
			})
		}
	}
	render(){
		if(this.state.loading == true){
			return(
				<View style={styles.Container}>
					<View style={styles.MealInfo}>
						<Text style={styles.MealText}>LOADING</Text>
					</View>
				</View>
			);
		}else{
			return(
				<ScrollView style={styles.Container}>
					<View style={styles.MealInfo}>
						<Image style={styles.MealImage} source={{uri: this.state.info.strMealThumb}} />
						<Text style={styles.MealText}>{this.state.info.strMeal}</Text>
					</View>
					<TouchableOpacity onPress={()=>{Linking.openURL(this.state.info.strYoutube)}}>
						<View style={styles.MealInfo}>
							<Text style={styles.MealText}>WATCH VIDEO.</Text>
						</View>
					</TouchableOpacity>
					<Text style={styles.Title}>Instructions</Text>
					<Text style={styles.Text}>
						{this.state.info.strInstructions}
					</Text>
					<Text style={styles.Title}>Ingredients</Text>
					<Text style={styles.Text}>
						{
							this.state.info.strMeasure1 + " " + this.state.info.strIngredient1 + "\n" +
							this.state.info.strMeasure2 + " " + this.state.info.strIngredient2 + "\n" +
							this.state.info.strMeasure3 + " " + this.state.info.strIngredient3 + "\n" +
							this.state.info.strMeasure4 + " " + this.state.info.strIngredient4 + "\n" +
							this.state.info.strMeasure5 + " " + this.state.info.strIngredient5 + "\n" +
							this.state.info.strMeasure6 + " " + this.state.info.strIngredient6 + "\n" +
							this.state.info.strMeasure7 + " " + this.state.info.strIngredient7 + "\n" +
							this.state.info.strMeasure8 + " " + this.state.info.strIngredient8 + "\n" +
							this.state.info.strMeasure9 + " " + this.state.info.strIngredient9 + "\n" +
							this.state.info.strMeasure10 + " " + this.state.info.strIngredient10 + "\n" +
							this.state.info.strMeasure11 + " " + this.state.info.strIngredient11 + "\n" +
							this.state.info.strMeasure12 + " " + this.state.info.strIngredient12 + "\n" +
							this.state.info.strMeasure13 + " " + this.state.info.strIngredient13 + "\n" +
							this.state.info.strMeasure14 + " " + this.state.info.strIngredient14 + "\n" +
							this.state.info.strMeasure15 + " " + this.state.info.strIngredient15 + "\n" +
							this.state.info.strMeasure16 + " " + this.state.info.strIngredient16 + "\n" +
							this.state.info.strMeasure18 + " " + this.state.info.strIngredient17
						}
					</Text>
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
	MealInfo: {
		margin: 5,
		flexDirection: "row",
		padding: 10,
		height: 60,
		borderWidth: 1,
		borderColor: "#d6d6d6",
		borderRadius: 5
	},
	MealImage: {
		height: 40,
		width: 40,
		borderRadius: 40,
		marginRight: 10
	},
	MealText: {
		fontWeight: "bold",
		textAlign: "center",
		marginTop: 8
	},
	Title: {
		padding: 10,
		fontWeight: "bold"
	},
	Text: {
		padding: 10
	}
});