import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';


export default class TelaMovimentacao extends Component {
  render() {
    return (
      <View style={styles.container}>   
        <Text style={styles.text}>Tela de Movimentação</Text> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#333"
  },

  text:{
    color:'white',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize:22,
}

});