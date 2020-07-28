import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Splash from '../Components/Splash';
import MainScreen from '../Components/MainScreen';
import AboutScreen from '../Screens/AboutScreen';
import Quotes from '../Screens/quotes';
import Cards from '../Components/CardsM';
import Cards1 from '../Screens/cards';
import About from '../Screens/AboutUs';

const StackNavigator = createStackNavigator({
  Home: {
    screen: Splash,
    navigationOptions: ({navigation}) => ({
      headerMode: null,
      headerTintColor: 'black',
      headerStyle: {
        backgroundColor: '#F2EEBC',
      },
    }),
  },

  Quotes: {
    screen: MainScreen,
    navigationOptions: ({navigation}) => ({
      headerMode: null,
      headerTintColor: 'black',
      headerStyle: {
        backgroundColor: '#F2EEBC',
      },
    }),
  },

  Details: {
    screen: Quotes,
    navigationOptions: ({navigation}) => ({
      headerMode: null,
      headerTintColor: 'black',
      headerStyle: {
        backgroundColor: '#F2EEBC',
      },
    }),
  },
  Cards: {
    screen: Cards,
    navigationOptions: ({navigation}) => ({
      headerMode: null,
      headerTintColor: 'black',
      headerStyle: {
        backgroundColor: '#F2EEBC',
      },
    }),
  },

  More_Cards: {
    screen: Cards1,
    navigationOptions: ({navigation}) => ({
      headerMode: null,
      headerTintColor: 'black',
      headerStyle: {
        backgroundColor: '#F2EEBC',
      },
    }),
  },

  Notes: {
    screen: AboutScreen,
    navigationOptions: ({navigation}) => ({
      headerMode: null,
      headerTintColor: 'black',
      headerStyle: {
        backgroundColor: '#F2EEBC',
      },
    }),
  },
  About_Us: {
    screen: About,
    navigationOptions: ({navigation}) => ({
      headerMode: null,
      headerTintColor: 'black',
      headerStyle: {
        backgroundColor: '#F2EEBC',
      },
    }),
  },
});

const MainRoute = createAppContainer(StackNavigator);

export default MainRoute;
