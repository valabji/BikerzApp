import React, { Component } from "react";
import { View, Text, Image } from "react-native";

export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: "silver",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image source={require("../assets/images/Logo.png")} />
      </View>
    );
  }
}
