'use strict';

import React from 'react';
import { connectProps } from '../redux/connect';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  FlatList,
} from 'react-native';

import Menu from './Menu';
import ListItem from '../components/listItem';

const Nav = (props) => {
  const { search, people } = props;
  const { addMarker, filterPeople } = props.actions;

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Menu />
        <TextInput
          onChangeText={filterPeople}
          style={styles.search}
          placeholder="Search"
        />
      </View>

      <FlatList
        data={people}
        renderItem={({ item }) => (
          <ListItem
            key={item.username}
            data={item}
            actions={{ addMarker }}
          />
        )}
      />
    </View>
  )

};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    width: '100%',
    minHeight: 50,
    padding: 10,
    paddingTop: 25,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: '#ccc',
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 0,
  },
  search: {
    flex: 1,
    padding: 5,
    marginLeft: 15,
    fontSize: 14,
    borderRadius: 20,
    alignSelf: 'stretch',
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
  },
});

export default connectProps('people', 'search')(Nav);
