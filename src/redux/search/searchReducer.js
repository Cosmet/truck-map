'use strict';

import {
  SEARCH_INPUT
} from '../../constants/actions';

const initial = '';

export default function searchReducer(state = initial, action) {
  switch (action.type) {
    case SEARCH_INPUT:
      return action.query;
    default:
      return state;
  }
}

