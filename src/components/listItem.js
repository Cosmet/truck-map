'use strict';

import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';


const ListItem = props => {
  let {
    username,
    name: { first, last },
    picture: { thumbnail },
  } = props.data;

  first = first[0].toUpperCase() + first.slice(1);
  last = last[0].toUpperCase() + last.slice(1);

  return (
    <View style={styles.container}>
      <Image source={{uri: thumbnail}} style={styles.thumbnail} />
      <View style={styles.innerContainer}>
        <Text style={styles.name}>{`${first} ${last}`}</Text>
        <Text>{username}</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
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
