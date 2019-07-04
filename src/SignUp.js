import React from 'react'
import firebase from 'react-native-firebase'
import {
	View, Text, TextInput, Button, StyleSheet
} from 'react-native'

export default class SignUp extends React.Component {
	state = { email: '', password: '', errorMessage: null }
	handleSignUp = () => {
		console.log('handleSignUp')
		firebase
			.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
			.then( ()=>this.props.navigation.navigate('Main') )
			.catch( error=>this.setState({ errorMessage: error.message }) )
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>
					Sign Up
				</Text>
				{
					this.state.errorMessage &&
					<Text style={{ color: 'red' }}>
						{this.state.errorMessage}
					</Text>
				}
				<TextInput
					style={styles.textInput}
					autoCapitalize="none"
					placeholder="Email"
					onChangeText={email => this.setState( {email: email} )}
					value={this.state.email}
					/>
				<TextInput
					style={styles.textInput} 
					secureTextEntry
					autoCapitalize="none"
					placeholder="Password"
					onChangeText={password => this.setState( {password: password} )}
					value={this.state.password}
				/>
				<Button title="Sign Up" onPress={this.handleSignUp} />
				<Button title="Already have an account? Login"
				  onPress={ () => this.props.navigation.navigate('Login')} />
			</View>
		)
	}

}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	textInput: {
		height: 40,
		width: '90%',
		borderColor: 'gray',
		borderWidth: 1,
		marginTop: 8
	}
})


