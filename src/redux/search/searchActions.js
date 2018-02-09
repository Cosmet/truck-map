'use strict';

import {
  SEARCH_INPUT
} from '../../constants/actions';

import Api from '../../api';

export function searchAutocomplete(value) {
  return (dispatch, getState) => {
    dispatch({
      type: SEARCH_INPUT,
      query: value,
    })
  }
}
