import React from "react";
import { authenticate } from "./api/authentication";
import { handleResponse } from "./api/utils/responseHandler";
import { getTopics } from "./api/topics";
import { getArticles } from "./api/articles";
import { getCredentials, removeCredentials } from './api/utils/credentials';
import Article from "./components/Article";
import Login from "./components/Login";

import { FlatList, ActivityIndicator, Text, View } from "react-native";

export default class Thoro extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      isAuthenticated: false,
      isLoading: true,
    }

    this.authenticateUser = this.authenticateUser.bind(this);
  }

  authenticateUser() {
    this.setState({
      isAuthenticated: true,
    })

    return getTopics()
      .then(topicsData => {
        console.log('topicsData', topicsData);
      });
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
    console.log("this.state APP", this.state);
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
      <View style={{ flex: 1, paddingTop: 100 }}>
        <Article
          // title={this.state.articleTitle}
          // description={this.state.articleDescription}
          title="WTF"
          description="Another WTF news!!"
        />
      </View>
    );
  }
}
