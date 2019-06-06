import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from '../App';

describe('App Component Test Suite', () =>{
  it('should mount in full DOM', () => {
    expect(mount(<App/>).find('.askAutocomplete').length).toBe(1);
  });
});