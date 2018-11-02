import {
  Text,
  View,
  Icon,
  TouchableOpacity,
} from '@shoutem/ui';
import React, { Component } from 'react';
import styles from './styles';
import { NavigationActions } from '../../navigator';
import Logout from '../Logout';

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
      <View style={styles.container} styleName="fill-parent">
        <View style={styles.bottomSeperator}>
          <TouchableOpacity onPress={() => this.navigateToScreen('thoro.Thoro')}
            style={styles.anchorArea}
          >
            <View styleName="horizontal v-center">
              <Icon name="add-to-favorites-off" />
              <Text style={styles.anchorText}>Top Clusters</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.navigateToScreen('thoro.Topic')}
            style={styles.anchorArea}
          >
            <View styleName="horizontal v-center">
              <Icon name="page" />
              <Text style={styles.anchorText}>Business</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.navigateToScreen('thoro.Topic')}
            style={styles.anchorArea}
          >
            <View styleName="horizontal v-center">
              <Icon name="users" />
              <Text style={styles.anchorText}>Society</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.navigateToScreen('thoro.Topic')}
            style={styles.anchorArea}
          >
            <View styleName="horizontal v-center">
              <Icon name="web" />
              <Text style={styles.anchorText}>Politics</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.navigateToScreen('thoro.Topic')}
            style={styles.anchorArea}
          >
            <View styleName="horizontal v-center">
              <Icon name="settings" />
              <Text style={styles.anchorText}>Technology</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Logout />
      </View>
    );
  }
}

export default NavigationDrawer;
