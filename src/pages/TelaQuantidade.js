import React, {Component} from 'react';
import { StyleSheet, Text, View,TextInput, StatusBar, Picker } from 'react-native';
import {Header, Left, Right, Icon} from 'native-base' 
import DropdownMenu from 'react-native-dropdown-menu';

class TelaQuantidade extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }
  render() {

    var data = [["Com defeito", "Em Reparo", "Nova", "Reparado", "Todos"], ["Em Cliente", "Em Estoque", "Em Laboratório", "Kit PD/MD", "Kit Rep", "Todos"]];

    return (
      <View style={styles.container}>   
         
          <TextInput style={styles.busca}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="Buscar..."
          /> 

          <DropdownMenu
            
            bgColor={'white'}
            tintColor={'#666666'}
            activityTintColor={'green'}
            borderRadius={5}
          // arrowImg={}      
          // checkImage={}   
          // optionTextStyle={{color: '#333333'}}
          // titleStyle={{color: '#333333'}} 
            maxHeight={200} 
            handler={(selection, row) => this.setState({text: data[selection][row]})}
            data={data}
        >

        </DropdownMenu>

      </View>

    );
  }
}

export default TelaQuantidade;


const styles = StyleSheet.create({
    
    container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#333",
    },

    menu: {
        marginLeft: -90,
        marginTop: 20,
        color: 'white',
    },

    text:{
        marginTop:100,
        color:'white',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize:22,
    },
busca:{
  top: -75,  
  width:320,
  height: 35,
  backgroundColor: '#fff',
  borderRadius: 5,
  paddingHorizontal: 18,
  fontSize:18,
  color:'black',
  marginVertical:8,
  shadowOpacity: 0.9,
  elevation: 30,
},

  });