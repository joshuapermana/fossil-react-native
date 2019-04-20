'use strict';
import React, { Component } from 'react';
import { AppRegistry,Alert,Modal,RefreshControl,BackHandler,AsyncStorage,FlatList,ImageBackground,View, StatusBar, Image, StyleSheet, TouchableOpacity, TextInput, NetInfo, ScrollView} from "react-native";
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
      Modal1:false
    };
  }
  setModal1(visible) {
    this.setState({ Modal1: visible });
  }
  alert(){
    Alert.alert(
      'Hello!',
      'Ready for the next step?',
      [
        {text: 'Ask me later', onPress: () => console.log('ask pressed')},
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]
    );
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
    <View style={style.container}>
        <TouchableOpacity style={style.button}
          onPress={() => {navigate("state1") }}
        >
            <Text style={style.textButton}> State & Props</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}
          onPress={() => {navigate("networking")}}
        >
            <Text style={style.textButton}> Networking</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}
          onPress={() => {navigate("eventhandling") }}
        >
            <Text style={style.textButton}> Event Handling</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}
          onPress={() => {this.alert()}}
        >
            <Text style={style.textButton}> Alert</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}
          onPress={() => {this.setState({ Modal1: true })}}
        >
            <Text style={style.textButton}> Modal</Text>
        </TouchableOpacity>
        <Modal
          animationType="none"
          transparent={false}
          visible={this.state.Modal1}
          onRequestClose={() => {
            this.setModal1(!this.state.Modal1);
            this.setState({
              spinner: false
            })
          }}
        >
        <View>
          <Text>Hello</Text>
        </View>
        </Modal>
    </View>
    
    );
  }
}

const style = StyleSheet.create(
{
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  button:{
    marginTop:20,
    height:60,
    width:150,
    backgroundColor:'#ffc45e',
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center',
    elevation:5
  },

});