'use strict';

import React, { PureComponent } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import { connectProps } from '../redux/connect';

import MapView, { Marker } from 'react-native-maps';

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
    const { marker } = this.props;

    return (
      <View style={styles.container}>
        <MapView style={styles.map}>

          {
            marker.map((mark, idx) => (
              <Marker
                key={idx}
                coordinate={mark.coordinates}
                title={mark.person.name.first}
                onPress={() => this.props.actions.userSelect(mark.person)}
              />
            ))
          }

        </MapView>
      </View>
    );
  }
}

const fill = StyleSheet.absoluteFillObject;

const styles = StyleSheet.create({
  container: fill,
  map: fill
})

export default connectProps('marker', 'search', 'user')(AppContainer);
