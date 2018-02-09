'use strict';

import {
  FETCH_PEOPLE,
  FILTER_PEOPLE,
} from '../../constants/actions';

const initial = [];

export default function peopleReducer(state = initial, action) {
  switch (action.type) {
    case FETCH_PEOPLE:
      return action.people;
    case FILTER_PEOPLE:
      return action.people;
    default:
      return state;
  }
}

