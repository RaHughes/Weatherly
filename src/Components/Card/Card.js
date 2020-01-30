import React from 'react';
import './Card.scss'

const Card = ({data}) => {
const cards = data.map(card => {

  return(
    <div key={Math.random()} className='card'>
    <p>Date: {card.dt_txt}</p>
    <img src={`http://openweathermap.org/img/wn/${card.weather[0].icon}@2x.png`}/>
    <p>High/Low: {((card.main.temp_max - 273.15) * 9/5 + 32).toFixed(2)} F / {((card.main.temp_min - 273.15) * 9/5 + 32).toFixed(2)} F </p>
    </div>
  )
})
  
return (
  <section className='cards'>
    {cards}
  </section>
)

}

export default Card;