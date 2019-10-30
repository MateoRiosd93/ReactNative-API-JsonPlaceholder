/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import UsersScreen from './screens/Users';
import PostsScreen from './screens/Posts';
import DetailsScreen from './screens/Details';

const AppNavigator = createStackNavigator(
  {
    Users: {
      screen: UsersScreen,
    },
    Posts: {
      screen: PostsScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Users',
  },
);

export default createAppContainer(AppNavigator);
