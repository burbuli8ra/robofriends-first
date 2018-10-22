import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundry from './ErrorBoundry';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<ErrorBoundry />);
});

describe('ErrorBoundry', () => {
  it('should render component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render error component', () => {
    const mockErrorState = {
      hasError: true
    }
    expect(wrapper.instance().componentDidCatch()).toMatchSnapshot();
  });
});