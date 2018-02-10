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
    return (
      <View style={styles.container}>
        <Map />
        <Nav />
        {!!this.props.user.username.length && <UserCard user={this.props.user} />}
      </View>
    );
  }
}

const fill = StyleSheet.absoluteFillObject;

const styles = StyleSheet.create({
  container: fill,
})

export default connectProps('user', 'global')(App);
