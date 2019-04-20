import React, { Component } from 'react';
import { AppRegistry, Alert,Text, TextInput, View,TouchableOpacity } from 'react-native';

export default class state2 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{padding: 10}}>
        <Text>
          Nama saya adalah {this.props.navigation.state.params.kirimNama}
        </Text>
      </View>
    );
  }
}
