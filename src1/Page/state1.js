import React, { Component } from 'react';
import { AppRegistry, Alert,Text, TextInput, View,TouchableOpacity } from 'react-native';

export default class state1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        Nama: 'FOSSIL',
        Asal:'Yogyakarta',
        Mafa:'Gado-Gado',
        Mifa:'Es Campur'
    };
  }
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{padding: 10}}>
        <Text style={{fontSize:15}}>Nama saya adalah {this.state.Nama}</Text>
        <Text style={{fontSize:15}}>Asal saya dari {this.state.Asal}</Text>
        <Text style={{fontSize:15}}>Makanan Favorit saya adalah {this.state.Mafa}</Text>
        <Text style={{fontSize:15}}>Minuman Favorit saya adalah {this.state.Mifa}</Text>
        <TouchableOpacity
        onPress={() => {
            navigate('state2', {
                kirimNama: this.state.Nama,
              })  
        }}
        style={{marginTop:50,height:40, width:90, justifyContent:'center', alignItems:'center',elevation:5,backgroundColor:'blue'}}
        >
            <Text style={{color:'white', fontWeight:'bold'}}>Kirim Data</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
