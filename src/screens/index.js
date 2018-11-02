import { Navigation } from 'react-native-navigation';

import Thoro from '../App.js';
import Topic from '../components/Topic';
import NavigationDrawer from '../components/NavigationDrawer';

// register all screens of the app (including internal ones)
export function registerScreens(store) {
  Navigation.registerComponent('thoro.Thoro', () => Thoro);
  Navigation.registerComponent('thoro.Topic', () => Topic);
  Navigation.registerComponent('thoro.NavigationDrawer', () => NavigationDrawer);
}