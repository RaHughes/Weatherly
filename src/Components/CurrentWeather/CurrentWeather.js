import React from 'react';
import './CurrentWeather.scss'

const CurrentWeather = ({data}) => {
  const date = (data.list[0].dt_txt).split('').slice(0, 10)

  return(
    <article className="current-weather">
        <p> Current City: {data.city.name}</p>
        <p> Current Condition: {data.list[0].weather[0].main}</p>
        <p> Date: {date}</p>
        <p> Temperature: {((data.list[0].main.temp - 273.15) * 9/5 + 32).toFixed(2)} F </p>
        <p> Expected High/Low: {((data.list[0].main.temp_max - 273.15) * 9/5 + 32).toFixed(2)} F / {((data.list[0].main.temp_min - 273.15) * 9/5 + 32).toFixed(2)} F </p>
        <p> Summary: {data.list[0].weather[0].description}</p>
    </article>
  )
}

export default CurrentWeather;