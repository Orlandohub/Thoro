import React from "react";
import { authenticate } from "./api/authentication";
import { handleResponse } from "./api/utils/responseHandler";
import { getArticles } from "./api/articles";
import { getCredentials } from './api/utils/credentials';
import Article from "./components/Article";
import Logout from "./components/Logout";
import Login from "./components/Login";
import Topics from './components/Topics';

import { FlatList, ActivityIndicator} from "react-native";
import {
  Text,
  View,
  Title,
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
      <React.Fragment>
        <NavigationBar
        styleName="inline"
          rightComponent={<Logout userLogout={this.userLogout} />}
          centerComponent={<Title>TOP CLUSTERS</Title>}
        />
        <View style={{ flex: 1 }}>
          <Topics />
        </View>
      </React.Fragment>
    );
  }
}
