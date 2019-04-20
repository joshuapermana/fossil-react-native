import React, { Component } from "react";
import { View, AppRegistry,YellowBox } from "react-native";
import { StyleProvider,Container, Content, Picker, Button, Text } from "native-base";
import HomeScreen from "./src1/HomeScreen/index.js";
export default class Tokomu extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  render() {
    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
      'Require cycle:'
    ]);
  return( 
    <HomeScreen/>
    );

  }
}