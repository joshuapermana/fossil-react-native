import React, { Component } from "react";
import { Image, View, StyleSheet,YellowBox, TouchableOpacity } from "react-native";
import landing from "./landing.js";
import eventhandling from "./eventhandling.js"
import state1 from "./state1.js"
import state2 from "./state2.js"
import networking from "./networking.js"
import { StackNavigator } from "react-navigation";

export default (MainScreenNavigator = StackNavigator(
  
  {
    landing: { screen: landing, 
      navigationOptions: () => ({
            headerTitleStyle: { textAlign:"center", flex:1  },
            title: `FOSSIL JS`,
          })
      },
      eventhandling: { screen: eventhandling, 
        navigationOptions: () => ({
              headerTitleStyle: { textAlign:"center", flex:1  },
              title: `Event Handling`,
              headerRight: (<View />)
            })
        },
      state1:{screen:state1,
        navigationOptions: () => ({
          headerTitleStyle: { textAlign:"center", flex:1  },
          title: `State 1`,
          headerRight: (<View />)
        })
      },
      state2:{screen:state2,
        navigationOptions: () => ({
          headerTitleStyle: { textAlign:"center", flex:1  },
          title: `State 2`,
          headerRight: (<View />)
        })
      },
      networking:{screen:networking,
        navigationOptions: () => ({
          headerTitleStyle: { textAlign:"center", flex:1  },
          title: `Networking`,
          headerRight: (<View />)
        })
      }
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