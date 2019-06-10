import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Search from '../components/Search';
import { wrap } from 'module';


describe('Search Test Suite', () => {
  const wrapper = mount(<Search />);
  it('should mount in full DOM', () => {
    expect(mount(<Search/>).find('.askAutocomplete').length).toBe(1);
  });

  it('should render correclty with no props', () => {
    const component = shallow(<Search questions={[]}/>);
    expect(component).toMatchSnapshot();
  });

});

describe('<Search/> rendered nodes', () => {
  const wrapper = shallow(<Search />);

  it('contains i element', () => {
    expect(wrapper.contains(<i className="fa fa-search a-icon a-icon-search" />)).toEqual(true);
  });
  
  it('contains input element', () => {
    expect(wrapper.find('input')).toHaveLength(1);
  });
});