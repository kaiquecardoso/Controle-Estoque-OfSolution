import React, {Component} from 'react';
import { StyleSheet, Text, View, Navigator} from 'react-native';

import Login from '../components/Login';

export default class TelaLogin extends Component {
  render() {
    return (
      <View style={styles.container}>   
        <Login/> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#333"
  },
});
