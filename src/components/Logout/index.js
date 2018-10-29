import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { removeCredentials } from '../../api/utils/credentials';

import {
  Button,
  Text,
  Icon
} from '@shoutem/ui';

class Logout extends Component {
  render() {
    const { userLogout } = this.props;
    return (
      <Button
        onPress={() => {
            removeCredentials()
              .then(() => userLogout())
          }
        }
      >
        <Icon name="exit-to-app" />
      </Button>
    );
  }
}

Logout.propTypes = {
  userLogout: PropTypes.func,
}

export default Logout;