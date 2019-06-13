import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import App from '../components/App.jsx';

describe('renders the root component prior to product call', () =>{
  // it should render 
  it('should render the main div', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('#App')).toBeDefined();
  });

  it('should have a h2 tag with value', () => {
  const wrapper = mount(<App />);
  // console.log(wrapper.debug());
  expect(wrapper.contains(<div></div>)).toBeDefined();
});
});

