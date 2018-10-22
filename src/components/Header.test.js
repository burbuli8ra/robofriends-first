import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Header />);
});
describe('Header', () => {
  it('should render component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should not render component', () => {
    const mockNextProps = {};
    const mockNextState = {};
    expect(wrapper.instance().shouldComponentUpdate()).toBeFalsy();
  });
});