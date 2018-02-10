'use strict';
import api from '../../api';

import { find } from 'lodash';

import {
  USER_SELECT,
  CLEAR_USER_SELECT,
} from '../../constants/actions';

export function userSelect(user) {
  return (dispatch, getState) => {
    const { geo } = getState().marker.filter(mark => mark.person.username === user.username)[0];
    const interests = api.getInterests(user['interest_ids']);
    const selectedUser = Object.assign({}, user, { interests, geo });

    dispatch({
      type: USER_SELECT,
      user: selectedUser,
    });
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
