import React from "react";
import {
  createAppContainer,
  createDrawerNavigator,
} from "react-navigation";
import Dashboard from "./screens/Dashboard";
import Events from "./screens/Events";
import SideMenu from './components/common/side-menu';

const navigator = createDrawerNavigator({
  Dashboard,
  Events }, 
   {
    contentComponent: SideMenu,
    drawerWidth: 260
  });

const DrawerContainer = createAppContainer(navigator);

export default class App extends React.Component {
  render() {
    return <DrawerContainer />;
  }
}
