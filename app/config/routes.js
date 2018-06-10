import React from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import Welcome from '../screens/Welcome';
import Help from '../screens/Help';
import Login from '../screens/Login';
import Home from '../screens/Home';
import RemoteControl from '../screens/RemoteControl';

const HomeStack = createStackNavigator(
  {
    RemoteControl,
    Home
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
)

const LoginStack = createSwitchNavigator(
  {
    Login,
    HomeStack,
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  }
);

const LoginScreen = createStackNavigator(
  {
    LoginStack,
    Help,
  },
  {
    initialRouteName: 'LoginStack',
    headerMode: 'none',
  }
);

export const WelcomeStack = createStackNavigator(
  {
    Welcome,
    Help,
    LoginScreen,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Welcome',
  }
);