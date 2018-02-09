'use strict';

// Actions

import * as globalActions from './global/globalActions';
import * as searchActions from './search/searchActions';
import * as userActions from './user/userActions';
import * as peopleActions from './people/peopleActions';

export const actions = [
  globalActions,
  searchActions,
  userActions,
  peopleActions,
];

// Reducers

import global from './global/globalReducer';
import search from './search/searchReducer';
import user from './user/userReducer';
import people from './people/peopleReducer';

import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  global,
  search,
  user,
  people,
});
