import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default class Form extends Component {
    render() {
      return (
        <View style={styles.container}>
            <TextInput style={styles.inputBox}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="LOGIN"
            />
            <TextInput style={styles.inputBox}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="SENHA"
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>ENTRAR</Text>
            </TouchableOpacity>

            
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>CADASTRAR</Text>
            </TouchableOpacity>
            
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },

    textEdit: {
      height: 40, 
      color:'white',
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 10
    },

    inputBox:{
      top: -100,  
      width:300,
      height: 40,
      backgroundColor: 'rgba(255,255,255,0.3)',
      borderRadius: 25,
      paddingHorizontal: 18,
      fontSize:22,
      color:'#ffffff',
      marginVertical:8,
      shadowOpacity: 0.9,
      elevation: 10
    },

    buttonText:{
      fontSize:22,
      fontWeight:'500',
      color:'#ffffff',
      textAlign:'center'
    },

    button:{
      backgroundColor:'#3C9C57',
      borderRadius: 25,
      width:190,
      height: 40,
      top: -90,
      paddingVertical:4,
      marginVertical:5,
      elevation: 10
    }

});