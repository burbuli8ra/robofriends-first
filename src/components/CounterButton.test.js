import React from 'react';
import { shallow } from 'enzyme';
import CounterButton from './CounterButton';

let wrapper, mockColor;
beforeEach(() => {
  mockColor = 'blue';
  wrapper = shallow(<CounterButton color={ mockColor } />);
});
describe('CounterButton', () => {
  it('should render component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update on click', () => {
    expect(wrapper.state('count')).toEqual(0);
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state('count')).toEqual(1);
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state('count')).toEqual(2);
    wrapper.find('[id="counter"]').simulate('keypress');
    expect(wrapper.state('count')).toEqual(2);
    expect(wrapper.props().color).toEqual('blue');
  });

  it('should not update counter', () => {
    const mockNextProps = {
      id: 'counter',
      color: 'blue'
    }
    const mockNextState = {
      count: 0
    }
    expect(wrapper.instance().shouldComponentUpdate(mockNextProps, mockNextState)).toBeFalsy;
  });
});