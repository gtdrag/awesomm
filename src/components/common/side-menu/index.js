import React, { Component } from "react";
import styles from "./styles";
import { NavigationActions, SafeAreaView } from "react-navigation";
import { ScrollView, Text, View, ImageBackground, Image } from "react-native";

class SideMenu extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    return (
      <ImageBackground
        source={require("../../../assets/images/bg_login_blur.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <SafeAreaView
          style={styles.container}
          forceInset={{ top: "always", horizontal: "never" }}
        >
          <ScrollView>
            <View>
              <View style={styles.navSectionStyle}>
                <Image
                  source={require("../../../assets/images/menu_dashboard_w.png")}
                  style={{ width: 26, opacity: .75 }}
                  resizeMode="contain"
                />
                <Text
                  style={styles.navItemStyle}
                  onPress={this.navigateToScreen("Dashboard")}
                >
                  DASHBOARD
                </Text>
              </View>
              <View style={styles.navSectionStyle}>
                <Image
                  source={require("../../../assets/images/menu_map_w.png")}
                  style={{ width: 26, opacity: .75 }}
                  resizeMode="contain"
                />
                <Text
                  style={styles.navItemStyle}
                  onPress={this.navigateToScreen("Events")}
                >
                  EVENTS
                </Text>
              </View>
              <View style={{ flexDirection: 'row', flexGrow: 1, height: .5, marginVertical: 20, marginHorizontal: 60, backgroundColor: '#ffffff88',}} />
              <View style={styles.navSectionStyle}>
                <Image
                  source={require("../../../assets/images/product-catalog.png")}
                  style={{ width: 26, opacity: .75 }}
                  resizeMode="contain"
                />
                <Text
                  style={styles.navItemStyle}
                  onPress={this.navigateToScreen("Leads")}
                >
                  PRODUCT CATALOG
                </Text>
              </View>
            </View>
            
          </ScrollView>
          <View style={styles.footerContainer}>
            <Text style={{color: '#ffffffcc'}}>v0.0.1</Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}
export default SideMenu;
