/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOADING              = 'bibleApp/App/LOADING';
export const ERROR                = 'bibleApp/App/ERROR';
export const SELECT_VERSION       = 'bibleApp/App/SELECT_VERSION';
export const SELECT_BOOK          = 'bibleApp/App/SELECT_BOOK';
export const SELECT_CHAPTER       = 'bibleApp/App/SELECT_CHAPTER';
export const SELECT_HOME          = 'bibleApp/App/SELECT_HOME';
export const SELECT_BACK          = 'bibleApp/App/SELECT_BACK';
export const FETCH_BIBLES_REQUEST = 'bibleApp/App/FETCH_BIBLES_REQUEST';
export const FETCH_BIBLES_SUCCESS = 'bibleApp/App/FETCH_BIBLES_SUCCESS';
export const FETCH_BIBLES_ERROR   = 'bibleApp/App/FETCH_BIBLES_ERROR';
export const BIBLE_VERSIONS       = ['mev', 'kjv', 'niv'];
