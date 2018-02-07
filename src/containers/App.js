'use strict';

import React, { PureComponent } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import { connectProps } from '../redux/connect';

import Map from './Map';
import Nav from './nav'

class App extends PureComponent {
  componentDidMount() {
    console.log('Hello From ' + this.props.global.platform);
    console.log('Some Redux bindActionCreators actions...', this.props.actions);
  }

  render() {
    return (
      <View style={styles.container}>
        <Map />
        <Nav />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  }
})

export default connectProps('global')(App);
