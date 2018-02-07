'use strict';

import React from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { connectProps } from '../redux/connect';


const Menu = props => {

  return (
    <View>
      <Text style={styles.menuBtn}>Menu</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  menuBtn: {
    fontSize: 16,
  }
});

export default connectProps('search', 'user')(Menu);
