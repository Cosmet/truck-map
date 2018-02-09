'use strict';

import React, { PureComponent } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import { connectProps } from '../redux/connect';

import Map from './Map';
import Nav from '../components/nav';

class App extends PureComponent {
  componentDidMount() {
    // this.props.actions.fetchPeople();
  }

  render() {
    const { search, people } = this.props;

    return (
      <View style={styles.container}>
        <Map />
        <Nav search={search} people={people} />
      </View>
    );
  }
}

const fill = StyleSheet.absoluteFillObject;

const styles = StyleSheet.create({
  container: fill,
})

export default connectProps('people', 'search', 'global')(App);
