import React, {Component} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default class Logo extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Image style={{width:100, height:100}}
          source={require('../images/logo.png')}/>
          <Text style={styles.logoText}>Controle de Estoque</Text>
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
    logoText:{
      marginVertical:10,
      fontSize:28,
      color:'rgba(255,255,255,0.7)',
      elevation: 30
    }
});