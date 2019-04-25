import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './src/screens/Login';
import Drawer from './src/Drawer';

console.disableYellowBox = true;


const RootStack = createStackNavigator({
  Login,
  Drawer,
  initialRouteName: 'Login',
},
{
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  }
});


const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}