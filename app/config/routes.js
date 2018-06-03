import React from 'react';
import { createStackNavigator, TabNavigator } from 'react-navigation';
import Welcome from '../screens/Welcome';
import Help from '../screens/Help';
import Login from '../screens/Login';

export const WelcomeStack = createStackNavigator(
  {
    Welcome: {
      screen: Welcome,
    },
    Help: {
      screen: Help,
    },
    Login: {
      screen: Login,
    }
  },
  {
    headerMode: 'none',
  }
);
