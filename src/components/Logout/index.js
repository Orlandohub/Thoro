import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { removeCredentials } from '../../api/utils/credentials';

import {
  TouchableOpacity,
  Text,
} from '@shoutem/ui';

class Logout extends Component {
  render() {
    const { userLogout } = this.props;
    return (
      <TouchableOpacity
        onPress={() => {
            removeCredentials()
              .then(() => userLogout())
          }
        }
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    );
  }
}

Logout.propTypes = {
  userLogout: PropTypes.func,
}

export default Logout;