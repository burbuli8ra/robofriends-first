import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  };
  wrapper = shallow(<MainPage { ...mockProps } />);
});

describe('MainPage', () => {
  it('should render component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should filter robots correctly', () => {
    expect(wrapper.instance().filterRobots()).toEqual([]);
  });

  it('should render loading component', () => {
    const mockPropsPending = {
      onRequestRobots: jest.fn(),
      robots: [],
      searchField: '',
      isPending: true
    };
    const wrapperPending = shallow(<MainPage { ...mockPropsPending } />);

    expect(wrapperPending).toMatchSnapshot();
  });

  it('should filter robots for john correctly', () => {
    const mockPropsJohn = {
      onRequestRobots: jest.fn(),
      robots: [
        {
          id: 1,
          name: 'John Snow',
          username: 'John John',
          email: 'johnsnow@gmail.com'
        }
      ],
      searchField: 'john',
      isPending: false
    }
    const wrapperJohn = shallow(<MainPage { ...mockPropsJohn } />);
    expect(wrapperJohn.instance().filterRobots()).toEqual([{
      id: 1,
      name: 'John Snow',
      username: 'John John',
      email: 'johnsnow@gmail.com'
    }]);
  });

  it('should filter robots for \'a\' correctly', () => {
    const mockPropsA = {
      onRequestRobots: jest.fn(),
      robots: [
        {
          id: 1,
          name: 'John Snow',
          username: 'John John',
          email: 'johnsnow@gmail.com'
        }
      ],
      searchField: 'a',
      isPending: false
    }
    const wrapperA = shallow(<MainPage { ...mockPropsA } />);
    expect(wrapperA.instance().filterRobots()).toEqual([]);
  });
});