import React, {Component} from 'react';
import './Form.scss'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      city: '',
      country: ''
    }
  }

  handleChange = e => {
    this.setState({[e.target.name]: [e.target.value]})
    console.log(this.state.city)
  }

  submitInfo = () => {
    this.props.findCity(this.state.city, this.state.country)
    this.setState({city: '', country: ''})
  }

  render() {
    return(
      <div className='form'>
      <h2>Welcome!</h2>
      <input 
      type='text' 
      placeholder='Input Your City' 
      value={this.state.city}
      name='city'
      onChange={this.handleChange}/>
      <input
      type='text'
      placeholder='Input Your Country Code (Usa, Ru, Uk...)'
      value={this.state.country}
      name='country'
      onChange={this.handleChange} />
      <button onClick={() => this.submitInfo()}>Search</button>
      </div>
    )
  }
}
