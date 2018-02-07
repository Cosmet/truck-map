'use strict';

import React from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { connectProps } from '../redux/connect';

import Search from '../components/search';
import Menu from '../components/menu';

const Nav = props => {

  return (
    <View style={styles.container}>
      <Search />
      <Menu />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxHeight: 50,
    padding: 10,
    borderTopWidth: 1,
    borderStyle: 'solid',
    borderTopColor: '#ccc',
  }
});

export default connectProps('search', 'user')(Nav);
