import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import * as images from 'assets';
import * as screens from 'screens';

export default createBottomTabNavigator(
  {
    Home: {
      screen: screens.Home,
      navigationOptions: {
        tabBarLabel: '홈'
      }
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
    }),
    initialRouteName: 'Home',
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
      style: {
        height: 55,
        paddingBottom: 6,
      }
    }
  }
);

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  Icon: {
    width: 27
  },
  IconFocused: {},
});
