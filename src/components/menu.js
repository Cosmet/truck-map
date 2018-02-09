'use strict';

import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';


const Menu = props => {

  return (
    <View>
      <Image source={require("../images/truckmap_icon.png")} style={styles.logo}></Image>
    </View>
  )
};

const styles = StyleSheet.create({
  logo: {
    width: 30,
    height: 30,
  }
});

export default Menu;
