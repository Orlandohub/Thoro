import { Navigation } from 'react-native-navigation';

import Thoro from '../App.js';

// register all screens of the app (including internal ones)
export function registerScreens(store) {
  Navigation.registerComponent('thoro.Thoro', () => Thoro);
}