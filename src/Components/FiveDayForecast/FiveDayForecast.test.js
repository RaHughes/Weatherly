import React from 'react';
import { shallow } from 'enzyme';
import FiveDayForecast from './FiveDayForecast';

describe('FiveDayForecast', () => {
  it('Should match the Snapshot', () => {
    const mockData = [{}, { one: 1 }, {}, {}, {}, {}, {}, {}, { two: 2 }, {},{}, {}, {}, {}, {}, {}, { three: 3 }, {}, {}, {}, {}, {}, {}, {}, { four: 4 }, {}, {}, {}, {}, {}, {}, {}, { five: 5} ]
    const wrapper = shallow(<FiveDayForecast list={mockData}/>)
    expect(wrapper).toMatchSnapshot()
  })
})