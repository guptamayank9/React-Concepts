import React, { useEffect, useState } from 'react'
import { Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';


const App = () => {
  const[cart ,setCart] = useState([]);


  const addToCart = (product)=>{
    const existing = cart.find((item)=>item.id === product.id);
    if(existing){
      setCart(
        cart.map((item)=>
          item.id === product.id ? {...item,qty:item.qty +1}:item
        )
      );
    }else{
      setCart([...cart,{...product,qty:1}]);
    }
  };
  const removeFromCart = (id) => {
   setCart(cart.filter((item)=>item.id !== id));
  
  }
  useEffect(()=>{//first --> load data
    const saveCart = localStorage.getItem("cart");

    if(saveCart){
      setCart(JSON.parse(saveCart));
    }

  },[]);

  useEffect(()=>{//its used for save data
    if(cart.length>0){
      localStorage.setItem("cart",JSON.stringify(cart));
    }

  },[cart]);

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home addToCart={addToCart}/>}/>
        <Route path='/cart' element={<Cart cart={cart} removeFromCart={removeFromCart}/>}/>
      </Routes>
      
    </div>
  )
}

export default App
