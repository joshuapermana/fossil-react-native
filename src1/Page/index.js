import React, { Component } from "react";
import { Image, View, StyleSheet,YellowBox, TouchableOpacity } from "react-native";
import landing from "./landing.js";
import { StackNavigator } from "react-navigation";

export default (MainScreenNavigator = StackNavigator(
  
  {
    landing: { screen: landing, 
      navigationOptions: () => ({
            headerTitleStyle: { textAlign:"center", flex:1  },
            title: `FOSSIL JS`,
          })
      },
  },
  {
    initialRouteName: 'landing'
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  },  
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      
      return (
        <View>

        </View>
      );
    }
  }
));
const style = StyleSheet.create({

})