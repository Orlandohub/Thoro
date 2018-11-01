/** @format */

import { Navigation } from 'react-native-navigation';

import { registerScreens } from './src/screens';

registerScreens(); // this is where you register all of your app's screens

// start the app
Navigation.startSingleScreenApp({
  screen: {
    screen: 'thoro.Thoro',
    // navigatorStyle: {
    //   navBarHidden: false,
    //   // statusBarHideWithNavBar: false,
    //   // statusBarColor: '#1AA5FD',
    // },
  },
  appStyle: {
    disabledBackGesture: true,
    orientation: 'portrait',
  },
  // drawer: {
  //   left: {
  //     screen: 'tidy.NavigationDrawer',
  //     // fixedWidth: 400,
  //     passProps: {},
  //   },
  //   style: {
  //     leftDrawerWidth: 53,
  //   },
  //   disableOpenGesture: true,
  //   type: 'MMDrawer',
  //   animationType: 'slide-and-scale',
  // },
});

