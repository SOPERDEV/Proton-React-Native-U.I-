import * as React from 'react';
import {createSwitchNavigator} from 'react-navigation';
import Auth from '../screens/Auth';
import Main from '../screens/Main';
import Screen1 from '../screens/screen1';
import Screen2 from '../screens/screen2';
import Screen3 from '../screens/screen3';
import Profile from '../screens/Profile';



export const AppNavigator = createSwitchNavigator({
  AuthScreen:{
    screen:Auth
  },
  MainScreen:{
    screen:Main
  },
  Screen1Screen:{
    screen:Screen1
  },
  Screen2Screen:{
    screen:Screen2
  },
  Screen3Screen:{
    screen:Screen3
  },
  ProfileScreen:{
    screen:Profile
  },

  
})