import { createStackNavigator } from 'react-navigation';

import TelaLogin from './src/pages/TelaLogin';
import Menu from './src/pages/Menu';

export default createStackNavigator({
  'Menu':{
    screen: Menu,
  }
},{
  navigationOptions:{
    header: null
  }
})


