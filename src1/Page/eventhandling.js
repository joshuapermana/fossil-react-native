import React, { Component } from 'react';
import { AppRegistry, Alert,Text, TextInput, View,TouchableOpacity } from 'react-native';

export default class eventhandling extends Component {
  constructor(props) {
    super(props);
    this.state = {
        text: ''
    };
  }
  firstfunction(){
      this.secondfunction()
  }
  secondfunction(){
      Alert.alert('nama : ',this.state.text)
  }
  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Tulis disini!"
          onChangeText={(text) => this.setState({text})}
        />
        <TouchableOpacity
        onPress={() => {this.firstfunction()}}
        style={{height:40, width:90, justifyContent:'center', alignItems:'center',elevation:5,backgroundColor:'blue'}}
        >
            <Text style={{color:'white', fontWeight:'bold'}}>Kirim</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
