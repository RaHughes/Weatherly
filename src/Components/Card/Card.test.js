import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  it('Should match the snapshot of the DOM', () => {
    const wrapper = shallow(<Card />)
    expect(wrapper).toMatchSnapShot();
  })
})