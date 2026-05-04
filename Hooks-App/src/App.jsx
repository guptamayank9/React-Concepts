import React, { useEffect, useState,useRef } from 'react'
import {UserContext} from './Context/UserContext'
import Child from './Child';

const App = () => {

  const[count ,setCount] = useState(0);

  useEffect(()=>{
    console.log("component loaded");
  },[]);///[] = sirf ek baar chalega



  const inputRef = useRef();////direct DOM access  /////. focus → input pe cursor   =>>>button click → cursor input me aaya? → next


  return (
    <>
    <div className='flex bg-yellow-400 w-96 h-50 grid text-2xl justify-center items-center  m-20'>
     <h1 className='p-8'>Count :{count}</h1>
     <button className='bg-gray-500 hover:bg-red-700 border-none focus:outline-2 text-white rounded p-2' 
     onClick={()=>setCount(count+1)}>Increase</button>
    </div>


     <input className='p-2 ml-8'
      ref={inputRef} placeholder='Type Here....' />
     <button onClick={()=>inputRef.current.focus()}
      className='bg-sky-500 hover:bg-sky-700 text-xl text-white rounded p-2'>
      Focus Input</button>
     
    <UserContext.Provider value={{name:"Mayank"}}>
      <Child/>
    </UserContext.Provider>

     </>

  )
}

export default App
