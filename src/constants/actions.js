'use strict'

import keymirror from 'keymirror';

const actions = keymirror({
  GLOBAL_INIT: null,
  SEARCH_INPUT: null,
  USER_SELECT: null,
  FETCH_PEOPLE: null,
  FILTER_PEOPLE: null,
  ADD_MARKER: null,
  CLEAR_USER_SELECT: null,
})

module.exports = actions;
