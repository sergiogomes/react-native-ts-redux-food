import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { HomePage } from './src/pages/HomePage';
import { LandingPage } from './src/pages/LandingPage';

const switchNavigator = createSwitchNavigator({
  landingStack: {
    screen: createStackNavigator({
      Landing: LandingPage
    }, {
      defaultNavigationOptions: {
        headerShown: false
      }
    })
  },
  homeStack: createBottomTabNavigator({
    home: {
      screen: createStackNavigator({
        HomePage: HomePage
      }),
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          const icon = focused === true ? require('./src/images/home_icon.png') : require('./src/images/home_n_icon.png');
          return <Image source={icon} style={styles.tabIcon} />
        }
      }
    },
    offer: {
      screen: createStackNavigator({
        OfferPage: HomePage
      }),
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          const icon = focused === true ? require('./src/images/offer_icon.png') : require('./src/images/offer_n_icon.png');
          return <Image source={icon} style={styles.tabIcon} />
        }
      }
    },
    cart: {
      screen: createStackNavigator({
        CartPage: HomePage
      }),
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          const icon = focused === true ? require('./src/images/cart_icon.png') : require('./src/images/cart_n_icon.png');
          return <Image source={icon} style={styles.tabIcon} />
        }
      }
    },
    account: {
      screen: createStackNavigator({
        AccountPage: HomePage
      }),
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          const icon = focused === true ? require('./src/images/account_icon.png') : require('./src/images/account_n_icon.png');
          return <Image source={icon} style={styles.tabIcon} />
        }
      }
    },
  })
});

const AppNavigation = createAppContainer(switchNavigator);

export default function App() {
  return (
    <AppNavigation />
  );
}

const styles = StyleSheet.create({
  tabIcon: {
    height: 30,
    width: 30,
  }
});
