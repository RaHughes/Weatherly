import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('Should match the snapshot of the DOM', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot();
  })

  it('Should be able to find a City', () => {
    const wrapper = shallow(<App />)
    const mockCity = {name: 'Denver'}
    const mockCountry = {country: 'usa'}
    const loadCity = jest.fn()

    wrapper.instance().findCity(mockCity, mockCountry)
    expect(wrapper.state('city')).toEqual(mockCity)
    expect(wrapper.state('country')).toEqual(mockCountry)
    // expect(loadCity).toHaveBeenCalledWith(mockCity, mockCountry)
  })
})
