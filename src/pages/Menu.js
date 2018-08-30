import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image } from 'react-native';
import {createDrawerNavigator, DrawerItems} from 'react-navigation'
import {Header, Left, Right, Icon} from 'native-base' 

import MenuBar from '../components/MenuBar';
import SettingsScreen from '../pages/SettingsScreen';
import TelaLogin from '../pages/TelaLogin';
import TelaMovimentacao from '../pages/TelaMovimentacao';
import TelaQuantidade from '../pages/TelaQuantidade';

export default class App extends Component {
  render() {
    return (
      <AppDrawerNavigator/> 
    );
  }
}

const CustomDrawerComponent = (props) =>(
  <SafeAreaView>

    
  </SafeAreaView>
) 

const AppDrawerNavigator = createDrawerNavigator({
  Home :MenuBar,
  Movimentação: TelaMovimentacao,
  Quantidade: TelaQuantidade,
  Configuração :SettingsScreen,
  Sair :TelaLogin,
},{drawerBackgroundColor: 'black', activeTintColor: 'white', activeBackgroundColor: '#3C9C57', 
   contentOptions:{
      activeTintColor: 'white',  
      activeBackgroundColor: '#3C9C57',
      inactiveTintColor: 'white'
    }
  },
);



