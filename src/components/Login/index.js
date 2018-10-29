import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  TextInput,
  Button,
  Text,
  View
} from '@shoutem/ui';

import { authenticate } from '../../api/authentication';
import { storeCredentials } from '../../api/utils/credentials';
import styles from './styles';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const { user, password } = this.state;
    return authenticate(user, password)
      .then(data => {
        if (!data.error) {
          const { authenticateUser } = this.props;
          return storeCredentials(data)
            .then(() => authenticateUser());
        }
      })
  }

  render() {
    return (
      <View
        className="container"
        style={ styles.container }
        styleName="fill-parent vertical v-center"
      >
        <TextInput
          placeholder={'Username or email'}
          style={ styles.loginUserInput }
          onChangeText={(user) => this.setState({user})}
          value={this.state.user}
        />
        <TextInput
          placeholder={'Password'}
          style={ styles.loginPassInput }
          secureTextEntry
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <Button
          styleName="secondary"
          onPress={this.onSubmit}
        >
          <Text>LOGIN</Text>
        </Button>
      </View>
    );
  }
}

Login.propTypes = {
  authenticateUser: PropTypes.func,
}

export default Login;