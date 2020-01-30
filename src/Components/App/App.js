import React, { Component }from 'react';
import './App.scss';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import FiveDayForecast from '../FiveDayForecast/FiveDayForecast';
import Form from '../Form/Form';

class App extends Component {
  constructor() {
    super()
    this.state = { 
      city: '',
      country: '',
      data: []
     }
  }

  loadCity = (city, country) => {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}?id=524901&APPID=f485a72a1e30b64d056573740d5064a3`)
    .then(data => data.json())
    .then(data => this.setState({data: data}))
    .catch(error => console.log(error))
  }

  findCity = (city, country) => {
    this.setState({ city: city, country: country})
    this.loadCity(city, country)
    console.log(this.state.city)
  }

  render() {
    return (
      <main className='App'>
        <h1 className='title'> Simple Weather </h1>
        {this.state.data.length === 0 ? 
        <header>
        <Form findCity={this.findCity}/>
        </header> : 
        <div className='main_section'>
        <button className='back_button' onClick={() => window.location.reload()}> Back </button>
        <CurrentWeather data={this.state.data}/>
        <h2 className='five_day_header'>Five Day Forecast</h2>
        <FiveDayForecast list={this.state.data.list}/>
        </div>}
      </main>
    )
  }
}


export default App;
