import React, { useState } from 'react'
import products from '../Data/products'
import ProductCard from '../Components/ProductCard'



const Home = ({addToCart}) => {

  const[filter,setFilter] = useState("all");
  const filterProducts = filter === "all" ? products : products.filter((item)=>item.category===filter);



  return (
    <div className='p-4'>
           
      <div className='mb-4 flex gap-4'>
       <button onClick={()=>setFilter("all")}>ALL</button>
       <button onClick={()=>setFilter("men")}>Men</button>   
       <button onClick={()=>setFilter("women")}>Women</button> 
     </div>
     


   
    <div className='grid grid-cols-2 gap-4 p-4'>
      {filterProducts.map((item)=>(
        <ProductCard
        key={item.id}
        product={item}
        addToCart={addToCart}
        />
      ))}
    </div>
    </div>

  )
}

export default Home
