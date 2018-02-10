'use strict';
import api from '../../api';

import {
  FETCH_PEOPLE,
  FILTER_PEOPLE,
} from '../../constants/actions';

export function fetchPeople() {
  return (dispatch, getState) => {
    dispatch({
      type: FETCH_PEOPLE,
      people: api.getAllPeople(),
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
    const people = api.getAllPeople();

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
    });

    dispatch({
      type: FETCH_PEOPLE,
      people: filteredPeople,
    })
  }
}
