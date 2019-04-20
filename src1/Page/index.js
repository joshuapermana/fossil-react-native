import React, { Component } from "react";
import { Image, View, StyleSheet,YellowBox, TouchableOpacity } from "react-native";
import landing from "./landing.js";
import { StackNavigator } from "react-navigation";

export default (MainScreenNavigator = StackNavigator(
  
  {
    // loading:{screen:loading, navigationOptions: { header: null }},
    landing: { screen: landing, 
      navigationOptions: () => ({
            headerTitleStyle: { textAlign:"center", flex:1  },
            title: `FOSSIL JS`,
            // headerBackground:'green'
          })
      },
    // Pulsa:{screen: pulsa,
    //   navigationOptions: () => ({
    //     headerTitleStyle: { textAlign:"center", flex:1  },
    //     title: `Pulsa`,
    //     headerRight: (<View />)
    //     // headerBackground:'green'
    //   })
    // },
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