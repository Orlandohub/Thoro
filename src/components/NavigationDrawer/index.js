import {
  Text,
  View,
  Icon,
  TouchableOpacity,
} from '@shoutem/ui';
import React, { Component } from 'react';
import styles from './styles';
import { NavigationActions } from '../../navigator';

class NavigationDrawer extends Component {
  constructor() {
    super();
    this.navigateToScreen = this.navigateToScreen.bind(this);
  }

  navigateToScreen(screen) {
    NavigationActions.pushScreen(screen);
    NavigationActions.toggleDrawer();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bottomSeperator}>
          <TouchableOpacity onPress={() => this.navigateToScreen('thoro.Topic')}
            style={styles.anchorArea}
          >
            <Icon name="page" style={{height: 20, width: 20, marginRight: 12}} />
            <Text style={styles.anchorText}>Business</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.navigateToScreen('thoro.Topic')}
            style={styles.anchorArea}
          >
            <Icon name="page" style={{height: 20, width: 20, marginRight: 12}} />
            <Text style={styles.anchorText}>Society</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default NavigationDrawer;
