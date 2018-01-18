import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Login from './componentes/pantallas/login';
import Dash from './componentes/pantallas/dash';

const rootNavigator = StackNavigator({
  Login: { screen: Login,
          navigationOptions:{
            header: null
          }
  },
  Dash: { screen: Dash,
    navigationOptions:{
      header:null
    }
  
  }

});

export default rootNavigator;