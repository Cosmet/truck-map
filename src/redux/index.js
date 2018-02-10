'use strict';

// Actions

import * as globalActions from './global/globalActions';
import * as searchActions from './search/searchActions';
import * as userActions from './user/userActions';
import * as peopleActions from './people/peopleActions';
import * as markerActions from './marker/markerActions';

export const actions = [
  globalActions,
  searchActions,
  userActions,
  peopleActions,
  markerActions,
];

// Reducers

import global from './global/globalReducer';
import search from './search/searchReducer';
import user from './user/userReducer';
import people from './people/peopleReducer';
import marker from './marker/markerReducer';

import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  global,
  search,
  user,
  people,
  marker,
});
