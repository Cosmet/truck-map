'use strict';

import React, { PureComponent } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import { connectProps } from '../redux/connect';

import MapView from 'react-native-maps';

class AppContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      user: props.user
    }
  }

  componentWillReceiveProps(props) {
    this.setState({
      search: props.search,
      user: props.user
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map} />
      </View>
    );
  }
}

const fill = StyleSheet.absoluteFillObject;

const styles = StyleSheet.create({
  container: fill,
  map: fill
})

export default connectProps('search', 'user')(AppContainer);
