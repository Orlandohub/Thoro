import React from "react";
import _ from 'lodash';
import { authenticate } from "./api/authentication";
import { handleResponse } from "./api/utils/responseHandler";
import { getArticles } from "./api/articles";
import { getCredentials } from './api/utils/credentials';
import { CATEGORIES } from './api/settings';
import Article from "./components/Article";
import Logout from "./components/Logout";
import Login from "./components/Login";
import Topics from './components/Topics';

import { ActivityIndicator} from "react-native";
import {
  Text,
  View,
  Title,
  ListView,
  GridView,
  NavigationBar,
} from '@shoutem/ui';

export default class Thoro extends React.Component {
  constructor(props) {
    super(props);

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
        <ListView
          style={{ listContent: { backgroundColor: 'white' }}}
          data={CATEGORIES}
          renderRow={category => (<Topics category={category} />)}
        />
      </View>
    );
  }
}
