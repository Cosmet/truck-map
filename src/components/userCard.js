'use strict';

import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from 'react-native';

import { connectProps } from '../redux/connect';

const UserCard = props => {
  let {
    username,
    email,
    phone,
    interests,
    name: { first, last },
    picture: { medium },
  } = props.user;

  first = first[0].toUpperCase() + first.slice(1);
  last = last[0].toUpperCase() + last.slice(1);

  return (
    <View style={styles.container}>
      <Text style={styles.exitBtn} onPress={props.actions.clearUserSelect}>X</Text>
      <View style={styles.headerContainer}>
        <Image source={{uri: medium}} style={styles.picture} />
        <Text style={styles.name}>{`${first} ${last}`}</Text>
        <Text>{username}</Text>
        <Text>{phone}</Text>
        <Text>{email}</Text>
      </View>

      <View style={styles.allInterestsContainer}>
        {
          interests.map((interest, idx) => (
            <View key={idx} style={styles.interestContainer}>
              <Image source={{uri: interest.image}} style={styles.interestImage} />
              <Text>{interest.hobby}</Text>
            </View>
          ))
        }
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 100,
    bottom: 100,
    left: 50,
    right: 50,
    padding: 25,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 1,
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    maxHeight: 150,
  },
  allInterestsContainer: {
    marginTop: 14,
  },
  interestContainer: {
    marginTop: -7,
    marginBottom: -7,
  },
  picture: {
    width: 100,
    height: 100,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#444',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  interestImage: {
    width: 25,
    height: 25,
  },
  exitBtn: {
    position: 'absolute',
    top: 10,
    left: 10,
    color: 'rgba(255, 0, 0, 0.4)',
    fontSize: 16,
  }
});

export default connectProps()(UserCard);
