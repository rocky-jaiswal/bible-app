import { createSelector } from 'reselect';

/**
 * Direct selector to the home state domain
 */
const selectAppDomain = () => state => state.get('app');

/**
 * Other specific selectors
 */

const selError = () => createSelector(
  selectAppDomain(),
  (substate) => substate.get('error')
);

const selLoading = () => createSelector(
  selectAppDomain(),
  (substate) => substate.get('loading')
);

const selBibles = () => createSelector(
  selectAppDomain(),
  (substate) => substate.get('bibles')
);

const selAllVersions = () => createSelector(
  selectAppDomain(),
  (substate) => substate.get('allVersions')
);

const selVersion = () => createSelector(
  selectAppDomain(),
  (substate) => substate.get('version')
);

const selBook = () => createSelector(
  selectAppDomain(),
  (substate) => substate.get('book')
);

const selChapter = () => createSelector(
  selectAppDomain(),
  (substate) => substate.get('chapter')
);

/**
 * Default selector used by Home
 */

const selectHome = () => createSelector(
  selectAppDomain(),
  (substate) => substate.toJS()
);

export default selectHome;
export {
  selAllVersions,
  selBibles,
  selVersion,
  selBook,
  selChapter,
  selError,
  selLoading,
};
