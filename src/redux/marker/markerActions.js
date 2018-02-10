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
    const latitude = getRandomInRange(30, 50, 5);
    const longitude = getRandomInRange(-80, -120, 5);
    const url = `https://services.gisgraphy.com/reversegeocoding/search?format=json&lat=${latitude}&lng=${longitude}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        const geo = data.result[0];
        if (!geo.adm1Name) {
          addMarker(person);
          throw new Error('Invalid coordinates generated: Generating new coordinates.')
        }
        dispatch({
          type: ADD_MARKER,
          marker: {
            person,
            geo,
            coordinates: { latitude, longitude },
          },
        })
      })
      .catch(err => console.error(`Fetch Error: geocoding api: ${err}`))
  }
}
