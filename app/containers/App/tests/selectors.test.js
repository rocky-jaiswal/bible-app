import { fromJS } from 'immutable';
import expect from 'expect';

import {
  selectApp,
} from '../selectors';

describe('selectGlobal', () => {
  const globalSelector = selectApp();
  it('should select the global state', () => {
    const globalState = fromJS({});
    const mockedState = fromJS({
      app: globalState,
    });
    expect(globalSelector(mockedState)).toEqual(globalState);
  });
});
