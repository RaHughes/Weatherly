import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form', () => {
  it('Should match the Snapshot', () => {
    const mockFindCity = jest.fn()
    const wrapper = shallow(<Form findCity={mockFindCity}/>)
    expect(wrapper).toMatchSnapshot()
  })

  it('should update description when handleChange is called', ()=> {
    const mockFindCity = jest.fn()
    const wrapper = shallow(<Form findCity={mockFindCity}/>)
    const mockEvent = { target: { name: 'city', value: 'Denver'} };
    const expected = 'Denver';

    wrapper.instance().handleChange(mockEvent)
    expect(wrapper.state('city')).toEqual([expected])   
  })

  it('Should be able to submit information', () => {
    const mockFindCity = jest.fn()
    const wrapper = shallow(<Form findCity={mockFindCity}/>)
    wrapper.instance().submitInfo()
    expect(mockFindCity).toHaveBeenCalled();
  })
})