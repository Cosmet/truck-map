'use strict';
import people from '../../data/people.json';

import {
  FETCH_PEOPLE,
  FILTER_PEOPLE,
} from '../../constants/actions';

export function fetchPeople() {
  return (dispatch, getState) => {
    dispatch({
      type: FETCH_PEOPLE,
      people,
    })
  }
}

export function filterPeople(query) {
  return (dispatch, getState) => {
    if (query.length < 2) {
      dispatch({
        type: FETCH_PEOPLE,
        people: [],
      })
      return;
    }

    query = query.toLowerCase();
    const filteredPeople = people.filter(person => {
      const {
        username,
        email,
        phone,
        cell,
        name: { first, last },
      } = person;
      const name = first + ' ' + last;

      return name.includes(query)
        || username.includes(query)
        || email.includes(query)
        || phone.includes(query)
        || cell.includes(query);
        // phone numbers should be matched with regex, but leaving it as is for now.
    });

    dispatch({
      type: FETCH_PEOPLE,
      people: filteredPeople,
    })
  }
}
