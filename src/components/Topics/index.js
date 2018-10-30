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
  GridRow,
  ListView,
  Tile,
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
    }
  }

  componentDidMount() {
    return getTopics()
      .then(topicsResponse => {
        console.log('topicsResponse', topicsResponse);
        const { data } = topicsResponse;
        this.setState({
          clusters: data,
        });
      });
  }

  renderRow(rowData, sectionId, index) {
    // rowData contains grouped data for one row,
    // so we need to remap it into cells and pass to GridRow
    const cellViews = rowData.map((cluster, id) => {
      return (
        <Card styleName="flexible">
          <View styleName="content">
            <Subtitle style={styles.topicLabel}>{cluster.mainTheme[0]}</Subtitle>
            <ClusterArticles cluster={cluster} />
          </View>
        </Card>
      );
    });

    return (
      <GridRow columns={1}>
        {cellViews}
      </GridRow>
    );
  }

  render() {
    const { clusters } = this.state;
    const groupedData = GridRow.groupByRows(clusters, 1, () => {
        return 1;
    });

    return (
      <ListView
        data={groupedData}
        renderRow={this.renderRow}
      />
    );
  }
}


export default Topics;
