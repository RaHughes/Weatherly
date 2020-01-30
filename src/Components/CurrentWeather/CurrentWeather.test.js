import React from 'react';
import { shallow } from 'enzyme';
import CurrentWeather from './CurrentWeather';

describe('CurrentWeather', () => {
  it('Should match the Snapshot', () => {
    const mockData = {
      city: { name: 'Denver' },
      list: [
        { dt_txt: '2020-01-31 03:00:00', main: 'stuff', weather: [ {main: {temp: 255, temp_max: 256, temp_mix: 254} }]}
      ]
    }
    const wrapper = shallow(<CurrentWeather data={mockData} />)
    expect(wrapper).toMatchSnapshot();
  })
})