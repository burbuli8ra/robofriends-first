import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

describe('CardList', () => {
  it('expect to render CardList component', () => {
    const mockRobots = [
      {
        id: 1,
        name: 'John Snow',
        username: 'John John',
        email: 'johnsnow@gmail.com'
      }
    ];
    expect(shallow(<CardList robots={ mockRobots } />)).toMatchSnapshot();
  });
});