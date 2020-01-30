import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('Should match the snapshot of the DOM', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapShot();
  })
})