'use strict';
import api from '../../api';

import {
  FETCH_PEOPLE,
  FILTER_PEOPLE,
} from '../../constants/actions';

export function fetchPeople() {
  return (dispatch, getState) => {
    api.getAllPeople()
      .then(people => {
        dispatch({
          type: FETCH_PEOPLE,
          people,
        });
      })
      .catch(console.error);
  }
}

export function filterPeople(query) {
  return (dispatch, getState) => {
    if (query.length < 2) {
      dispatch({
        type: FILTER_PEOPLE,
        people: [],
      })
      return;
    }
    query = query.toLowerCase();

    api.getAllPeople()
      .then(people => {
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
          type: FILTER_PEOPLE,
          people: filteredPeople,
        });
      })
      .catch(console.error);
  }
}
