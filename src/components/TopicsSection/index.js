import { ActivityIndicator } from "react-native";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
  Text,
  Icon,
  Button,
  Image,
} from '@shoutem/ui';

import ClusterArticles from '../ClusterArticles';
import { getTopics } from '../../api/topics';
import styles from './styles';

class TopicsSection extends Component {
  constructor(props) {
    super(props);

    this.renderCluster = this.renderCluster.bind(this);

    this.state = {
      clusters: null,
      isLoading: true,
    }
  }

  componentDidMount() {
    const { category } = this.props;
    return getTopics(category)
      .then(topicsResponse => {
        const { data } = topicsResponse;
        this.setState({
          clusters: _.slice(data, 0, 5),
          isLoading: false,
        });
      });
  }

  renderCluster(cluster) {
    return (
      <View styleName="vertical h-start rounded-corners" style={styles.clusterTile}>
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
    const { category } = this.props;

    return (
      <View styleName="md-gutter-horizontal">
        <View styleName="horizontal h-start" style={styles.topicTitle}>
          {
            category === 'all' ?
              <Title>Top Clusters</Title>
            :
              <Title>{_.capitalize(category)}</Title>
          }
        </View>
        {
          _.map(clusters, cluster => this.renderCluster(cluster))
        }
        {
          category === 'all' ?
            <View styleName="horizontal h-center" style={styles.topicViewAll}>
              <Button styleName="secondary"><Text>View All</Text></Button>
            </View>
          :
            null
        }
      </View>
    );
  }
}

TopicsSection.propTypes = {
  category: PropTypes.array.isRequired,
}


export default TopicsSection;
