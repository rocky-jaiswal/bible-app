/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your appliction state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOADING,
  ERROR,
  SELECT_VERSION,
  SELECT_BOOK,
  SELECT_CHAPTER,
  SELECT_HOME,
  SELECT_BACK,
  FETCH_BIBLES_REQUEST,
  FETCH_BIBLES_ERROR,
  FETCH_BIBLES_SUCCESS,
  BIBLE_VERSIONS,
} from './constants';


export function setLoading(loading) {
  return {
    type: LOADING,
    loading,
  };
}

export function setError(error) {
  return {
    type: ERROR,
    error,
  };
}

export function selectVersion(version) {
  return {
    type: SELECT_VERSION,
    version,
  };
}

export function selectBook(book) {
  return {
    type: SELECT_BOOK,
    book,
  };
}

export function selectChapter(chapter) {
  return {
    type: SELECT_CHAPTER,
    chapter,
  };
}

export function selectHome() {
  return {
    type: SELECT_HOME,
  };
}

export function selectBack() {
  return {
    type: SELECT_BACK,
  };
}

export function fetchBibles() {
  return {
    type: FETCH_BIBLES_REQUEST,
    versions: BIBLE_VERSIONS,
  };
}

export function fetchBiblesSuccess(payload) {
  return {
    type: FETCH_BIBLES_SUCCESS,
    payload,
  };
}

export function fetchBiblesError(error) {
  return {
    type: FETCH_BIBLES_ERROR,
    error,
  };
}
