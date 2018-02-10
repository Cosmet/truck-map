'use strict';

import { getRandomInRange } from '../../lib/geo';

import {
  ADD_MARKER
} from '../../constants/actions';

export function addMarker(person) {
  return (dispatch, getState) => {
    const currentMarkers = getState().marker;
    const isMarked = currentMarkers.find(marker => {
      return marker.person.username === person.username;
    })

    if (isMarked) return;

    dispatch({
      type: ADD_MARKER,
      marker: {
        person,
        coordinates: {
          latitude: getRandomInRange(30, 50, 5),
          longitude: getRandomInRange(-80, -120, 5),
        },
      },
    })
  }
}
