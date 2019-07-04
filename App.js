import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Loading from './src/Loading'
import Login from './src/Login'
import SignUp from './src/SignUp'
import Main from './src/Main'

const switchNavigator = createSwitchNavigator(
  {
    Loading,
    Login,
    SignUp,
    Main
  },
  {
    initialRouteName: 'Loading'
  }
)

const AppContainer = createAppContainer(switchNavigator);

export default () => 
	<AppContainer />


