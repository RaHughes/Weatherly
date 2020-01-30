import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  it('Should match the snapshot of the DOM', () => {
    const mockData = [{ 
      dt_txt: 'date', 
      weather: [{icon: 'img'}], 
      main: { temp_max: 250, temp_min: 240 }
      }]
      
    const wrapper = shallow(<Card data={mockData}/>)
    expect(wrapper).toMatchSnapshot();
  })
})