import React from "react";
import { Text, SafeAreaView, View,} from "react-native";
import store from "react-native-simple-store";


class Events extends React.Component {
  componentDidMount() {
    store.get("user").then(result => {
      console.log(result);
    });
  }

  render() {
    return (
      <View style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
        <SafeAreaView
          style={{ alignItems: "center", flexDirection: "column", flexGrow: 1,}}>
          <Text>Events View</Text>
        </SafeAreaView>
      </View>
    );
  }
}

export default Events;
