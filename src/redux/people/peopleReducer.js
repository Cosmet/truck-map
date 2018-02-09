'use strict';

import {
  FETCH_PEOPLE,
  FILTER_PEOPLE,
} from '../../constants/actions';

const initial = '';

export default function searchReducer(state = initial, action) {
  switch (action.type) {
    case FETCH_PEOPLE:
      return action.query;
    case FILTER_PEOPLE:
      return action.query;
    default:
      return state;
  }
}

