import React from "react";

import { FlatList, ActivityIndicator, Text, View } from "react-native";

function handleResponse(response) {
  let contentType = response.headers.get("content-type");
  if (contentType.includes("application/json")) {
    return handleJSONResponse(response);
  } else if (contentType.includes("text/html")) {
    return handleTextResponse(response);
  } else {
    // Other response types as necessary. I haven't found a need for them yet though.
    throw new Error(`Sorry, content-type ${contentType} not supported`);
  }
}

function handleJSONResponse(response) {
  return response.json().then(json => {
    if (response.ok) {
      return json;
    } else {
      return Promise.reject(
        Object.assign({}, json, {
          status: response.status,
          statusText: response.statusText
        })
      );
    }
  });
}
function handleTextResponse(response) {
  return response.text().then(text => {
    if (response.ok) {
      return json;
    } else {
      return Promise.reject({
        status: response.status,
        statusText: response.statusText,
        err: text
      });
    }
  });
}

export default class FetchExample extends React.Component {
  constructor(props) {
    super(props);
    // this.state ={ isLoading: true}
  }

  componentDidMount() {
    return fetch("https://getter.thoro.news/auth/login-user", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "omit",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      redirect: "follow",
      referrer: "no-referrer",
      body: JSON.stringify({ email: "demo@parsec.news", password: "demo" })
    })
      .then(handleResponse)
      .then(data => {
        console.log("data", data);
        return fetch(
          'https://getter.thoro.news/api/topics/2018-10-25/all/all/{"sort":"score"}',
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${data.user.token}`
            }
          }
        )
          .then(handleResponse)
          .then(topicsData => {
            console.log("topicsData", topicsData.data[0]);
            return fetch(
              `https://getter.thoro.news/api/article/${
                topicsData.data[0].articles[0]
              }`,
              {
                method: "GET",
                headers: {
                  Authorization: `Bearer ${data.user.token}`
                }
              }
            )
              .then(handleResponse)
              .then(article => {
                console.log("Article ->", article);
                this.setState({
                  articleTitle: article.data[0].title,
                  articleDescription: article.data[0].description
                });
              })
              .catch(error => console.log(error));
          })
          .catch(error => console.log(error));
      })
      .catch(error => console.log(error));
  }

  render() {
    console.log("this.state", this.state);
    if (!this.state) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{ flex: 1, paddingTop: 100 }}>
        <Text style={{ marginBottom: 20, fontWeight: "700" }}>
          {this.state.articleTitle}
        </Text>
        <Text>{this.state.articleDescription}</Text>
      </View>
    );
  }
}
