'use strict';

import {
  USER_SELECT
} from '../../constants/actions';

const initial = {
  gender: '',
  name: {
    title: '',
    first: '',
    last: '',
  },
  email: '',
  dob: '',
  registered: '',
  phone: '',
  cell: '',
  picture: {
    large: '',
    medium: '',
    thumbnail: '',
  },
  username: '',
  'interest_ids': []
};

export default function userReducer(state = initial, action) {
  switch (action.type) {
    case USER_SELECT:
      return {
        //...
      }
  }

  return state;
}
