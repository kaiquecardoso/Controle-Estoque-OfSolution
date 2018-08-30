import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';


export default class MenuBar extends Component {
    render() {
      return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Movimentação</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>  
              <Text style={styles.buttonText}>Quantidade</Text>
            </TouchableOpacity>  
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Sair</Text>
            </TouchableOpacity>
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

    buttonText:{
      fontSize:18,
      fontWeight:'500',
      color:'#ffffff',
      textAlign:'center'
    },

    button:{
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#3C9C57',
      marginVertical:10,
      borderRadius: 10,
      width:250,
      height: 50,
      top: -80,
      paddingVertical:7
    }

});