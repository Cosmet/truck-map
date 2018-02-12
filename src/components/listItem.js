'use strict';

import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';

import { connectProps } from '../redux/connect';

const ListItem = props => {
  let {
    username,
    name: { first, last },
    picture: { thumbnail },
  } = props.data;
  const { addMarker } = props.actions;

  first = first[0].toUpperCase() + first.slice(1);
  last = last[0].toUpperCase() + last.slice(1);

  return (
    <TouchableHighlight
      underlayColor='#f0f0f0'
      style={styles.highlight}
      onPress={() => addMarker(props.data)}
    >
      <View style={styles.container}>
        <Image source={{ uri: thumbnail }} style={styles.thumbnail} />
        <View style={styles.innerContainer}>
          <Text style={styles.name}>{`${first} ${last}`}</Text>
          <Text>{username}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
};

const styles = StyleSheet.create({
  highlight: {
    borderRadius: 5,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: '#f0f0f0',
  },
  innerContainer: {
    flex: 1,
    marginLeft: 10,
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default ListItem;
