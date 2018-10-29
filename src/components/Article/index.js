import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Text, View } from "react-native";

export class Article extends Component {
  render() {
    const { title, description } = this.props;
    return (
      <View>
        <Text style={{ marginBottom: 20, fontWeight: "700" }}>{title}</Text>
        <Text>{description}</Text>
      </View>
    );
  }
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Article;
