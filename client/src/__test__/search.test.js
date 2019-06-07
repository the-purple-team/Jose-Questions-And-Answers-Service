import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Search from '../components/Search';

describe('Search Test Suite', () => {
  it('should mount in full DOM', () => {
    expect(mount(<Search/>).find('.askAutocomplete').length).toBe(1);
  });

  it('should render correclty with no props', () => {
    const component = shallow(<Search/>);
    expect(component).toMatchSnapshot();
  });
  it('should be selectable by class "a-spacing-base"', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.is('.a-spacing-base')).toBe(true);
  });
});