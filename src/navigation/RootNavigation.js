import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import * as screens from 'screens';
import TabNavigator from './TabNavigator';

const stackNavigator = createStackNavigator(
  {
    Main: {
      screen: TabNavigator,
      navigationOptions: {
        header: null
      }
    },
  },
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: () => ({
      headerStyle: {
        borderBottomWidth: 0,
      },
    })
  }
);

export default createAppContainer(stackNavigator);
