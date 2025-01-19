import React from 'react'

const Card = (props) => {
  return (
    <div className='card_container'>
      <div>{props.icon && <props.icon className='list-icons ui-font'/>}</div>
      <h1 className='ui-font'>{props.cardName}</h1>
      <p className='ui-font'>{props.description}</p>
    </div>
  )
}

export default Card
