import React from "react";
import { Image, SafeAreaView, View, ImageBackground, TouchableOpacity, Text} from "react-native";
import { DrawerActions } from 'react-navigation';
import store from "react-native-simple-store";


class Dashboard extends React.Component {
  componentDidMount() {
    store.get("user").then(result => {
      console.log(result);
    });
  }

  render() {
    const { componentId } = this.props;
    return (
      <View style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
        <ImageBackground source={require("../assets/images/bg_circle_pattern.png")} style={{ height: 200, width: '100%'}}>
        <TouchableOpacity hitSlop={{top: 10, bottom: 10, left: 10, right: 10}} onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())} style={{marginTop:40, marginLeft:15,}}>
          <Image source={require('../assets/images/icon_menu_black_notext.png')} resizeMode='contain' style={{ width: 24,}}/>
        </TouchableOpacity>
        </ImageBackground>
        <View style={{backgroundColor: '#eee', width: '100%', height: 1}} />
        <SafeAreaView
          style={{ alignItems: "center", flexDirection: "column", flexGrow: 1,}}>
          <Text>Dashboard View</Text>
        </SafeAreaView>
      </View>
    );
  }
}

export default Dashboard;
