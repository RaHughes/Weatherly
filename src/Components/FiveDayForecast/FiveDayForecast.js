import React from 'react';
import Card from '../Card/Card'
import './FiveDayForecast.scss'

const FiveDayForecast = ({list}) => {
  const fiveDay = [list[1], list[9], list[17], list[25], list[33]]
  
  return (
    <Card data={fiveDay}/>
  )
}

export default FiveDayForecast
