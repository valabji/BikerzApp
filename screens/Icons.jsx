import React, { Component } from "react";
import { View, Text } from "react-native";
import * as SVG from "../components/SVG";
export default class Icons extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  Getz = () => {
    let arr = [];
    Object.keys(SVG).forEach((I) => {
        const MyO = SVG[I]
      arr.push(<View style={{flexDirection:"row"}} ><Text>{I}</Text><MyO/></View>);
    });
    return arr;
  };
  render() {
    const MyO = SVG["HomeOff"];
    return <View style={{backgroundColor:"#fccc"}}>{this.Getz()}</View>;
  }
}
