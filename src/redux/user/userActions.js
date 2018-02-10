'use strict';
import api from '../../api';

import { find } from 'lodash';

import {
  USER_SELECT
} from '../../constants/actions';

export function userSelect(user) {
  return (dispatch, getState) => {
    const selectedUser = Object.assign({}, user, {
      interests: api.getInterests(user['interest_ids']),
    })
    dispatch({
      type: USER_SELECT,
      user: selectedUser,
    })
  }
}
