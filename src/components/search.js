'use strict';

import React, { PureComponent } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';

import { connectProps } from '../redux/connect';

const Search = props => {

  return (
    <TextInput style={styles.search} placeholder="Search">
    </TextInput>
  )
};

const styles = StyleSheet.create({
  search: {
    flex: 1,
    marginRight: 20,
    fontSize: 18,
  },
});

export default connectProps('search', 'user')(Search);
