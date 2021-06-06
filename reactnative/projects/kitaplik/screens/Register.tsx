import React from 'react'
import { View, Text, TextInput, Dimensions, TouchableOpacity, StyleSheet } from 'react-native'

export default class Register extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			loading: false,
			username: "",
			mail: "",
			birthdate: "",
			password: "",
			error: null,
		}
		this.register = this.register.bind(this);
	}
	register(){
		var username = String(this.state.username);
		var mail = String(this.state.mail);
		var birthdate = String(this.state.birthdate);
		var password = String(this.state.password);
		if(username.trim() != "" && mail.trim() != "" && birthdate.trim() != "" && password.trim() != ""){
			this.setState({error: null});
			console.log(this.state);
		}else{
			this.setState({error: "Boş giriş yapamazsınız."});
		}
	}
	render(){
		return(
			<View style={styles.Container}>
				<Text style={styles.Logo}>Kitaplık</Text>
				<View style={styles.Split} />
				<TextInput style={styles.Input} placeholder="Kullanıcı adınız" onChangeText={(text) => this.setState({username: text})} value={this.state.username} />
				<TextInput style={styles.Input} placeholder="Mail adresiniz" onChangeText={(text) => this.setState({mail: text})} value={this.state.mail} />
				<TextInput style={styles.Input} placeholder="Doğum tarihiniz" onChangeText={(text) => this.setState({birthdate: text})} value={this.state.birthdate} />
				<TextInput style={styles.Input} placeholder="Şifreniz" secureTextEntry onChangeText={(text) => this.setState({password: text})} value={this.state.password} />
				<View style={styles.Split} />
				<TouchableOpacity onPress={this.register}>
					<View style={[styles.Button, styles.RegisterButton]}>
						<Text style={styles.ButtonText}>Kayıt Ol</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
					<View style={[styles.Button, styles.LoginButton]}>
						<Text style={styles.ButtonText}>Giriş yap</Text>
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	Container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	},
	Logo: {
		fontWeight: "bold",
		fontSize: 36,
		color: "#E50914"
	},
	Split: {
		marginVertical: 20
	},
	Input: {
		width: Dimensions.get("window").width / 1.25,
		height: 40,
		padding: 10,
		marginVertical: 10,
		borderRadius: 5,
		borderWidth: 0.5,
		borderColor: "#000"
	},
	Button: {
		width: Dimensions.get("window").width / 1.25,
		height: 40,
		padding: 10,
		borderRadius: 5,
		marginVertical: 5
	},
	LoginButton: {
		backgroundColor: "#E50914",
	},
	RegisterButton: {
		backgroundColor: "#3d9ae8"
	},
	ButtonText: {
		textAlign: "center",
		color: "#fff",
		fontWeight: "bold"
	}
});