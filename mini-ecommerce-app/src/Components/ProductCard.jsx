import React from 'react'

const ProductCard = ({product,addToCart}) => {
  return (
    <div className='border p-4 text-center shadow'>

    <img src={product.image}
     alt={product.name}
    className='w-full h-40 object-cover hover:scale-105 transition' />
       
      <h2>{product.name}</h2>
      <p>${product.price}</p>

      <button
       onClick={()=>addToCart(product)}
      className='bg-blue-500 text-white px-2 py-1 mt-2'

      >Add to Cart</button>
      
    </div>
  )
}

export default ProductCard
