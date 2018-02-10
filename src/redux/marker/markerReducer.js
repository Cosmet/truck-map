'use strict';

import {
  ADD_MARKER,
} from '../../constants/actions';

const initial = [];

export default function markerReducer(state = initial, action) {
  switch (action.type) {
    case ADD_MARKER:
      return [...state, action.marker];
    default:
      return state;
  }
}
