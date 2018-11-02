import React, { Component } from 'react';
import { styles } from './styles';
import { View, Title } from '@shoutem/ui';

class Topic extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Title>Topic</Title>
      </View>
    );
  }
}


export default Topic;