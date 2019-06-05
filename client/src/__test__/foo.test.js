import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Foo from '../Foo';
import Search from '../components/Search';
import { wrap } from 'module';



// describe('A suite', function() {
//   it('should render without throwing an error', function() {
//     expect(shallow(<Foo />).contains(<div className="foo">Bar</div>)).toBe(true);
//   });

//   it('should be selectable by class "foo"', function() {
//     expect(shallow(<Foo />).is('.foo')).toBe(true);
//   });

//   it('should mount in a full DOM', function() {
//     expect(mount(<Foo />).find('.foo').length).toBe(1);
//   });

//   it('should render to static HTML', function() {
//     expect(render(<Foo />).text()).toEqual('Bar');
//   });
// });

describe('Search Test Suite', () => {
  it('should mount in full DOM', () => {
    expect(mount(<Search/>).find('.askAutocomplete').length).toBe(1);
  });

  it('should be selectable by class "a-spacing-base"', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.is('.a-spacing-base')).toBe(true);
  });

  // it('should contain any matching elements patterns', () => {
  //   const wrapper = shallow(<Search />);
  //   expect(wrapper.contains(<div className="a-section a-spacing-base askBtfSearchFormLabel askAutocomplete">test</div>)).to.equal(true);
  // });
});