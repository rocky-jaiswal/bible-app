/*
 * LoginPage Sagas
 */

import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import AsyncAPI from './async_api';

import {
  FETCH_BIBLES_REQUEST,
} from './constants';

import {
  fetchBiblesSuccess,
  fetchBiblesError,
} from './actions';


function* fetchBibles(action) {
  const results = yield [ call(fetchAndStoreBible, action.versions[0]),
                          call(fetchAndStoreBible, action.versions[1]),
                          call(fetchAndStoreBible, action.versions[2]) ];
  yield put(fetchBiblesSuccess({ mev: results[0], kjv: results[1], niv: results[2] }));
}

function* fetchAndStoreBible(version) {
  try {
    const loadedBible = yield call(AsyncAPI.loadBible, version);
    if (loadedBible !== null && loadedBible.length === 31102) {
      return loadedBible;
    }
    const response = yield call(AsyncAPI.fetchBible, version);
    yield call(AsyncAPI.storeBible, version, response.data);
    return yield call(AsyncAPI.loadBible, version);
  } catch (err) {
    console.error(err);
    const message = `Error fetching bible version - ${version}`;
    yield put(fetchBiblesError(message));
  }
}

function* appSaga() {
  yield* takeLatest(FETCH_BIBLES_REQUEST, fetchBibles);
}

// All sagas to be loaded
export {
  appSaga,
};
