import React from 'react';
import { createStackNavigator, TabNavigator } from 'react-navigation';
import Welcome from '../screens/Welcome';
import Help from '../screens/Help';

export const WelcomeStack = createStackNavigator(
  {
    Welcome: {
        screen: Welcome,
      },
    Help: {
      screen: Help,
    }
  },
  {
    headerMode: 'none',
  }
);
