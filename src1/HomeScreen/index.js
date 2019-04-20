import React, { Component } from "react";
import MainScreenNavigator from "../Page/index.js";
import { StackNavigator, DrawerNavigator } from "react-navigation";

const HomeScreenRouter = StackNavigator(
  {
    Page: { screen: MainScreenNavigator }
  },
  {
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false,
      }
   },
);
export default HomeScreenRouter
