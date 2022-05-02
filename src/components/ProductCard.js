import React from 'react'

// Debe recibir category, description, id, image, price, title, rating
const ProductCard = ({category, description, id, image, price, title, rating}) => {
  return (
    <div className='surface'>
        <p>{category}</p>
        <img src={image} alt={title}/>
        <h3>{title}</h3>
        <h5>{price}</h5>
        <p>{description}</p>

    </div>
  )
}

export default ProductCard