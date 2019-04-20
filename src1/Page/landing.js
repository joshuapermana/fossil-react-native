'use strict';
import React, { Component } from 'react';
import { AppRegistry,Alert,RefreshControl,BackHandler,AsyncStorage,FlatList,ImageBackground,View, StatusBar, Image, StyleSheet, TouchableOpacity, TextInput, NetInfo, ScrollView} from "react-native";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Item,
  Title,
  Input,
  InputGroup,
  Tab,
  Tabs,
  Footer,
  FooterTab,
  Label
} from "native-base";
export default class landing extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  
  render() {
    const { navigate } = this.props.navigation;
    return (
    <View style={style.container}>
        <TouchableOpacity style={style.button}
          onPress={() => { }}
        >
            <Text style={style.textButton}> Event Handling</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}
          onPress={() => { }}
        >
            <Text style={style.textButton}> State & Props</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}
          onPress={() => { }}
        >
            <Text style={style.textButton}> Networking</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}
          onPress={() => {this.alert()}}
        >
            <Text style={style.textButton}> Alert</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}
          onPress={() => { }}
        >
            <Text style={style.textButton}> Modal</Text>
        </TouchableOpacity>
    </View>
    );
  }
}

const style = StyleSheet.create(
{
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    marginTop:20,
    height:60,
    width:120,
    backgroundColor:'#ffc45e',
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center',
    elevation:5
  },

});