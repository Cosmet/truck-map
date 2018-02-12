'use strict';

import React, { PureComponent } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import { connectProps } from '../redux/connect';

import Map from './Map';
import Nav from './Nav';
import UserCard from '../components/userCard';

class App extends PureComponent {
  componentDidMount() {

  }

  render() {
    const { user } = this.props;
    const userSelected = user.username.length > 0;
    const { clearUserSelect } = this.props.actions;

    return (
      <View style={styles.container}>
        <Map />
        <Nav />
        {
          userSelected &&
            <UserCard user={user} actions={{ clearUserSelect }} />
        }
      </View>
    );
  }
}

const fill = StyleSheet.absoluteFillObject;

const styles = StyleSheet.create({
  container: fill,
})

export default connectProps('user', 'global')(App);
