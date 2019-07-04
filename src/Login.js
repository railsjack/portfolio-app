import React from 'react'
import firebase from 'react-native-firebase'
import {
	View, Text, TextInput, Button, StyleSheet
} from 'react-native'

export default class Login extends React.Component {
	state = { email: '', password: '', errorMessage: null }
	handleLogin = () => {
		const {email, password} = this.state
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then( () => this.props.navigation.navigate('Main') )
			.catch( error => this.setState( {errorMessage: error.message} ) )
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Login</Text>
				{this.errorMessage &&
					<Text>
						{this.errorMessage}
					</Text>
				}
				<TextInput
					style={styles.textInput}
					placeholder="Email"
					autoCapitalize="none"
					onChangeText={ email => this.setState({email: email}) }
					value={this.state.email}
				/>
				<TextInput
					style={styles.textInput}
					placeholder="Password"
					autoCapitalize="none"
					secureTextEntry
					onChangeText={ password => this.setState({password: password}) }
					value={this.state.password}
				/>
				<Button title="Login" onPress={this.handleLogin} />
				<Button title="Don't have an account? Sign Up" 
					onPress={ () => this.props.navigation.navigate('SignUp') }/>
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

