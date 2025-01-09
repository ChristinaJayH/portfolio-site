import React from 'react'

const Card = (props) => {
  return (
    <div className='card_container'>
      <div>{props.icon && <props.icon className='list-icons'/>}</div>
      <h1>{props.cardName}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default Card
