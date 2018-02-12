'use strict';
import api from '../../api';

import {
  USER_SELECT,
  CLEAR_USER_SELECT,
} from '../../constants/actions';

export function userSelect(user) {
  return (dispatch, getState) => {
    const { geo } = getState().marker.filter(mark => mark.person.username === user.username)[0];

    api.getInterests(user['interest_ids'])
      .then(interests => {
        const selectedUser = Object.assign({}, user, { interests, geo });

        dispatch({
          type: USER_SELECT,
          user: selectedUser,
        });
      })
      .catch(console.error)
  }
}

export function clearUserSelect() {
  return (dispatch, getState) => {
    dispatch({
      type: CLEAR_USER_SELECT,
      user: {},
    })
  }
}
