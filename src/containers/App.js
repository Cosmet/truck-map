'use strict';

import React, { PureComponent } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import { connectProps } from '../redux/connect';

import Map from './Map';
import Nav from '../components/nav'

class App extends PureComponent {
  componentDidMount() {

  }

  render() {
    const { search } = this.props;

    return (
      <View style={styles.container}>
        <Map />
        <Nav search={search} />
      </View>
    );
  }
}

const fill = StyleSheet.absoluteFillObject;

const styles = StyleSheet.create({
  container: fill,
})

export default connectProps('search', 'global')(App);
