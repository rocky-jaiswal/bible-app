/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import {
  LOADING,
  ERROR,
  SELECT_VERSION,
  SELECT_BOOK,
  SELECT_CHAPTER,
  SELECT_HOME,
  FETCH_BIBLES_ERROR,
  FETCH_BIBLES_SUCCESS,
  BIBLE_VERSIONS,
} from './constants';
import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: null,
  bibles: [],
  allVersions: BIBLE_VERSIONS,
  version: BIBLE_VERSIONS[0],
  book: '',
  chapter: '',
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_BIBLES_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('bibles', action.payload);
    case FETCH_BIBLES_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);
    case LOADING:
      return state
        .set('loading', action.loading)
        .set('error', false);
    case ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case SELECT_VERSION:
      return state
        .set('version', action.version)
        .set('loading', false);
    case SELECT_BOOK:
      return state
        .set('book', action.book)
        .set('loading', false);
    case SELECT_CHAPTER:
      return state
        .set('chapter', action.chapter)
        .set('loading', false);
    case SELECT_HOME:
      return state
        .set('book', '')
        .set('chapter', '')
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
