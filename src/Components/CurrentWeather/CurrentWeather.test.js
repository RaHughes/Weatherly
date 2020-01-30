import React from 'react';
import { shallow } from 'enzyme';
import CurrentWeather from './CurrentWeather';

describe('CurrentWeather', () => {
  it('Should match the Snapshot', () => {
    const mockData = {
      city: { name: 'Denver' },
      list: [
        { main: 'stuff', weather: [ {main: {temp: 255, temp_max: 256, temp_mix: 254} }]}
      ]
    }
    const wrapper = shallow(<CurrentWeather data={mockData} />)
    expect(wrapper).toMatchSnapshot();
  })
})