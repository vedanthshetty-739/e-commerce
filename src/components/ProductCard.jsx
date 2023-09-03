import React from 'react'

function ProductCard(props) {
  return (
    <div className="product_card">
        {/* <img src="" alt="" srcset={props.images} /> */}
        <p>{props.title}</p>
        <p>{props.rating}</p>
    </div>
  )
}

export default ProductCard
