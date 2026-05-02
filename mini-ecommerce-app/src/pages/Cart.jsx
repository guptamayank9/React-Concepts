import React from 'react'

const Cart = ({cart,removeFromCart}) => {

    const total = cart.reduce(
        (sum,item)=>sum+ item.price+item.qty,0
    );

  return (
    <div className='p-4'>
      <h1 className='text-xl mb-4'>Cart</h1>

      {cart.length===0 && <p>Your Cart is Empty</p>}

      {cart.map((item,index)=>(
        <div key={index} className='flex justify-between mb-2'>
           <p>{item.name} -${item.price}*{item.qty}</p>
           <button onClick={()=>removeFromCart(item.id)}
            className='bg-red-500 border text-white px-2 py-1 mt-2'>
            Remove
           </button>
        </div>
      ))}
      {cart.length>0 && (
        <h2 className='mt-4 font-bold'>Total: ${total}</h2>
      )}
    </div>
  )
}

export default Cart
