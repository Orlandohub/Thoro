import { ActivityIndicator } from "react-native";
import React, { Component } from 'react';
import _ from 'lodash';
import {
  View,
  TouchableOpacity,
  Caption,
  ImageBackground,
  Title,
  Subtitle,
  Divider,
  Card,
  ListView,
  Tile,
  Icon,
  Image,
} from '@shoutem/ui';

import ClusterArticles from '../ClusterArticles';
import { getTopics } from '../../api/topics';
import styles from './styles';

class Topics extends Component {
  constructor(props) {
    super(props);

    this.renderRow = this.renderRow.bind(this);

    this.state = {
      clusters: null,
      isLoading: true,
    }
  }

  componentDidMount() {
    return getTopics()
      .then(topicsResponse => {
        console.log('topicsResponse', topicsResponse);
        const { data } = topicsResponse;
        this.setState({
          clusters: data,
          isLoading: false,
        });
      });
  }

  renderRow(cluster) {
    return (
      <View styleName="vertical h-start" style={styles.clusterTile}>
        <View styleName="horizontal v-center" style={styles.topicLabel}>
          <Icon name="products" />
          <Subtitle styleName="bold"> {_.capitalize(cluster.mainTheme[0])} </Subtitle>
        </View>
        <ClusterArticles cluster={cluster} />
      </View>
    );
  }

  render() {
    const clusters = this.state.clusters || {};

    return (
      <View styleName="md-gutter-horizontal">
        <ListView
          style={{ listContent: { backgroundColor: 'white' }}}
          loading={true}
          renderHeader={() => (
            <View styleName="horizontal h-start" style={styles.topicTitle}>
              <Title>TOP CLUSTERS</Title>
            </View>
          )}
          data={clusters}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}


export default Topics;
