import React from 'react'
import products from '../Data/products'
import ProductCard from '../Components/ProductCard'



const Home = ({addToCart}) => {

  return (
    <div className='grid grid-cols-2 gap-4 p-4'>
      {products.map((item)=>(
        <ProductCard
        key={item.id}
        product={item}
        addToCart={addToCart}
        />
      ))}
    </div>
  )
}

export default Home
