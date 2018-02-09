'use strict'

import keymirror from 'keymirror';

const actions = keymirror({
  GLOBAL_INIT: null,
  SEARCH_INPUT: null,
  USER_SELECT: null,
  FETCH_PEOPLE: null,
  FILTER_PEOPLE: null,
})

module.exports = actions;
