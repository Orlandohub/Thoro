import _ from 'lodash';

class NavigationActionsClass {

  setNavigator(navigator) {
    this.navigator = navigator;
  }

  pushScreen(screen, title, passProps={}, navBarHidden=true) {
    if (!this.navigator) {
      return;
    }

    this.navigator.push({
      screen,
      passProps,
      title,
      navigatorStyle: {
        navBarHidden,
        statusBarColor: '#1AA5FD',
      },
    });
  }

  showModal(screen, title, passProps={}, navBarHidden=true) {
    if (!this.navigator) {
      return;
    }

    this.navigator.showModal({
      screen,
      title,
      passProps, // simple serializable object that will pass as props to the modal (optional)
      navigatorStyle: {
        navBarHidden,
        statusBarColor: '#1AA5FD',
      }, // override the navigator style for the screen, see "Styling the navigator" below (optional)
      animationType: 'slide-up', // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
    });
  }

  dismissModal() {
    if (!this.navigator) {
      return;
    }

    this.navigator.dismissModal({
      animationType: 'slide-down' // 'none' / 'slide-down' , dismiss animation for the modal (optional, default 'slide-down')
    });
  }

  toggleDrawer() {
    if (!this.navigator) {
      return;
    }

    this.navigator.toggleDrawer({
      side: 'left',
      animated: true,
    });
  }

  popScreen() {
    if (!this.navigator) {
      return;
    }

    this.navigator.pop({ animated: true, animationType: 'fade' })
  }

  setTitle(title) {
    if (!this.navigator) {
      return;
    }

    this.navigator.setTitle({ title });
  }

  setStyle(styles) {
    if (!this.navigator) {
      return;
    }

    this.navigator.setStyle(styles);
  }
}

export const NavigationActions = new NavigationActionsClass();

