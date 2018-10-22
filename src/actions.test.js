import configureStore from 'redux-mock-store';
import thunkMiddleWare from 'redux-thunk';
import fetchMock from 'fetch-mock';

import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';
import * as actions from './actions';

const mockStore = configureStore([thunkMiddleWare]);
afterEach(() => {
  fetchMock.restore()
})
describe('actions', () => {
  it('should create setSearchField action', () => {
    const text = 'This is a string';
    const expectedAction = {
      type: CHANGE_SEARCH_FIELD,
      payload: text
    }
    expect(actions.setSearchField(text)).toEqual(expectedAction);
  });

  it('should handle requestRobots', () => {
    const expectedAction = {
      type: REQUEST_ROBOTS_PENDING
    }
    const store = mockStore();
    store.dispatch(actions.requestRobots());
    const actionsArray = store.getActions();

    expect(actionsArray[0]).toEqual(expectedAction);
  });

  it('should handle requestRobots successfully', () => {
    const mockInitialState = { robots: [] };
    const mockData = [{
      id: 1,
      name: 'John Snow',
      username: 'John John',
      email: 'johnsnow@gmail.com'
    }];
    const mockUrl = 'https://jsonplaceholder.typicode.com/users';
    const expectedActions = [
      { type: REQUEST_ROBOTS_PENDING },
      { type: REQUEST_ROBOTS_SUCCESS, payload: { robots: mockData } }
    ];

    fetchMock.getOnce(mockUrl, { robots: mockData });
    const store = mockStore(mockInitialState);

    return store.dispatch(actions.requestRobots())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  });

  it('should throw error on requestRobots', () => {
    const mockInitialState = { error: '' };
    const mockError = 'There was an error!';
    const mockUrl = 'https://jsonplaceholder.typicode.com/users';
    const expectedActions = [
      { type: REQUEST_ROBOTS_PENDING },
      { type: REQUEST_ROBOTS_FAILED, payload: { error: mockError } }
    ];

    fetchMock.getOnce(mockUrl, { error: mockError });
    const store = mockStore(mockInitialState);

    return store.dispatch(actions.requestRobots())
      .catch(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  });
});