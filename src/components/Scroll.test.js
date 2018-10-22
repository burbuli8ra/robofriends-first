import React from 'react';
import { shallow } from 'enzyme';
import Scroll from './Scroll';

describe('Scroll', () => {
  it('should render component', () => {
    expect(shallow(<Scroll />)).toMatchSnapshot();
  });
});