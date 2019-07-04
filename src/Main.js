import React from 'react'
import firebase from 'react-native-firebase'
import {
	View, Text, Button, StyleSheet
} from 'react-native'

export default class Main extends React.Component {
	state = { currentUser:null }

	handleLogout = async () => {
		try{
			await firebase.auth().signOut()
			this.props.navigation.navigate('Loading')
		}catch(e){
			console.log(e)
		}
	}


	componentDidMount() {
		const { currentUser } = firebase.auth()
		this.setState( {currentUser: currentUser} )
	}


	render() {
		const { currentUser } = this.state
		return (
			<View style={styles.container}>
				<Text>
					Hi { currentUser && currentUser.email }
				</Text>
				<Button title="Logout" 
					onPress={ this.handleLogout }
				/>
			</View>
		)
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})
