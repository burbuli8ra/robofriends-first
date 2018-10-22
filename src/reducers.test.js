import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';
import * as reducers from './reducers';

let initialStateSearch, initialStateRobots;
beforeEach(() => {
  initialStateSearch = {
    searchField: ''
  };
  initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
  };
});
describe('reducers', () => {
  it('searchRobots should return the initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual(initialStateSearch);
  });

  it('searchRobots should handle CHANGE_SEARCH_FIELD', () => {
    expect(reducers.searchRobots(initialStateSearch, {
      type: CHANGE_SEARCH_FIELD,
      payload: 'abc'
    })).toEqual({ searchField: 'abc' })
  });

  it('requestRobots should return the initial state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
  });

  it('requestRobots should handle REQUEST_ROBOTS_PENDING', () => {
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_PENDING
    })).toEqual({
      isPending: true,
      robots: [],
      error: ''
    });
  });

  it('requestRobots should handle REQUEST_ROBOTS_SUCCESS', () => {
    const mockRobots = [
      {
        id: 1,
        name: 'John Snow',
        username: 'John John',
        email: 'johnsnow@gmail.com'
      }
    ];
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_SUCCESS,
      payload: mockRobots
    })).toEqual({
      isPending: false,
      robots: mockRobots,
      error: ''
    });
  });

  it('requestRobots should handle REQUEST_ROBOTS_FAILED', () => {
    const mockError = 'This is an error';
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_FAILED,
      payload: mockError
    })).toEqual({
      isPending: false,
      robots: [],
      error: mockError
    })
  });
});