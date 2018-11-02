import React from "react";
import { Platform } from 'react-native';
import _ from 'lodash';
import { authenticate } from "./api/authentication";
import { handleResponse } from "./api/utils/responseHandler";
import { getArticles } from "./api/articles";
import { getCredentials } from './api/utils/credentials';
import { CATEGORIES } from './api/settings';
import Article from "./components/Article";
import Logout from "./components/Logout";
import Login from "./components/Login";
import TopicsSection from './components/TopicsSection';
import { NavigationActions } from './navigator';

import { ActivityIndicator} from "react-native";
import {
  Text,
  View,
  ListView,
  Icon,
  Button,
} from '@shoutem/ui';

export default class Thoro extends React.Component {
  constructor(props) {
    super(props);

    NavigationActions.setNavigator(props.navigator);

    this.state = { 
      isAuthenticated: false,
      isLoading: true,
    }

    this.authenticateUser = this.authenticateUser.bind(this);
    this.userLogout = this.userLogout.bind(this);
  }

  authenticateUser() {
    this.setState({
      isAuthenticated: true,
    });
  }

  userLogout() {
    this.setState({
      isAuthenticated: false,
    })
  }

  componentDidMount() {
    return getCredentials()
      .then(token => {
        this.setState({
          isAuthenticated: token ? true : false,
          isLoading: false,
        })
      })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View
          className="container"
          styleName="overlay fill-parent vertical v-center"
        >
          <ActivityIndicator />
        </View>
      );
    }

    if (!this.state.isAuthenticated) {
      return (
        <Login authenticateUser={this.authenticateUser} />
      )
    }

    return (
      <View styleName="fill-parent">
        <View styleName="horizontal h-start" style={{
          marginTop: (Platform.OS === 'ios') ? 30 : 0,
          paddingTop: 10,
          paddingBottom: 10,
          borderBottomWidth: 1,
          borderBottomColor: '#F0F0F0',
        }}>
          <Button onPress={() => NavigationActions.toggleDrawer()}><Icon name="sidebar" /></Button>
        </View>
        <ListView
          style={{ listContent: { backgroundColor: 'white' }}}
          data={CATEGORIES}
          renderRow={category => (<TopicsSection category={category} />)}
        />
      </View>
    );
  }
}
