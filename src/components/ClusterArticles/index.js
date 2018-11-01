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
import styles from './styles';

class ClusterArticles extends Component {
  constructor(props) {
    super(props);
    this.renderArticles = this.renderArticles.bind(this);

    this.state = {
      articles: null,
    }
  }

  componentDidMount() {
    const { cluster } = this.props;
    const { articles } = cluster;

    getArticles(_.toString(articles))
      .then(articlesResponse => {
        const { data } = articlesResponse;
        this.setState({
          articles: data,
        })
      })
  }

  renderArticles(articles) {
    return _.map(articles, (article, id) => {
      return (
        <TouchableOpacity style={styles.article} key={id}>
          <Tile style={{backgroundColor: '#F0F0F0'}}>
            {
              id === 0 ?
                <Title styleName="sm-gutter-bottom bold" style={styles.articleTitle}>{article.title}</Title>
                :
                <Subtitle styleName="sm-gutter-bottom" style={styles.articleTitle}>{article.title}</Subtitle>
            }
            
            <Caption>By {article.domain}</Caption>
          </Tile>
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

    return (
      <View>
        {this.renderArticles(articles)}
      </View>
    );
  }
}

ClusterArticles.propTypes = {
  cluster: PropTypes.array,
}


export default ClusterArticles;