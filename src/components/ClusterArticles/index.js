import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
import _ from 'lodash';

import { getArticles } from '../../api/articles';

class ClusterArticles extends Component {
  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);

    this.state = {
      articles: null,
    }
  }

  componentDidMount() {
    const { cluster } = this.props;
    const { articles } = cluster;

    getArticles(_.toString(articles))
      .then(articlesResponse => {
        console.log('articlesResponse', articlesResponse);
        const { data } = articlesResponse;
        this.setState({
          articles: data,
        })
      })
  }

  renderRow(rowData, sectionId, index) {
    // rowData contains grouped data for one row,
    // so we need to remap it into cells and pass to GridRow
    console.log('rowData', rowData);
    if (index === '0') {
      console.log('rowData[0]', rowData[0]);
      return (
        <TouchableOpacity key={index}>
          <Tile>
            <Title styleName="md-gutter-bottom">{rowData[0].title}</Title>
            <Caption styleName="sm-gutter-horizontal">By {rowData[0].domain}</Caption>
          </Tile>
          <Divider styleName="line" />
        </TouchableOpacity>
      );
    }

    const cellViews = rowData.map((article, id) => {
      console.log('article on cellViews', article);
      return (
        <TouchableOpacity key={index}>
          <Tile>
            <Title styleName="md-gutter-bottom">{article.title}</Title>
            <Caption styleName="sm-gutter-horizontal">By {article.domain}</Caption>
          </Tile>
          <Divider styleName="line" />
        </TouchableOpacity>
      );
    });

    return (
      <GridRow columns={2}>
        {cellViews}
      </GridRow>
    );
  }

  render() {
    const { articles } = this.state;
    // console.log('articles', articles);

    let isFirstArticle = true;
    const groupedData = GridRow.groupByRows(articles, 2, () => {
      if (isFirstArticle) {
        isFirstArticle = false;
        return 2;
      }
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

ClusterArticles.propTypes = {
  cluster: PropTypes.array.isRequeired,
}


export default ClusterArticles;