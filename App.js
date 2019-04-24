/* eslint-disable func-names */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-global-assign */
/* eslint-disable no-undef */
import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './src/screens/Login';


console.disableYellowBox = true;


const RootStack = createStackNavigator({
  Login: {
    screen: Login,
  },
  initialRouteName: 'Login',
});


const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}
