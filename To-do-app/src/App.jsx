import React, { useEffect, useState } from 'react'

const App = () => {

  const[input,setInput] = useState("");
  const[todos ,setTodos] = useState([]);

  const addTodo=()=>{
    if(input.trim()==="") return;
    setTodos([...todos,input]);
    setTodos(newTodo);
    //save data in local storage
    localStorage.setItem("todos",JSON.stringify(newTodo));
    setInput("");
  }
  useEffect(()=>{
    const saveTodos = JSON.parse(localStorage.getItem("todos"));
    if(saveTodos){
      setTodos(saveTodos);
    } 
  },[]);

  const deleteTodo = (index) => {
    const newTodo = todos.filter((_,i)=>i !== index);
    setTodos(newTodo);
    localStorage.setItem("todos",JSON.stringify(newTodo));
  }

  

  return (
    <div className='h-screen flex items-center justify-center bg-gray-100 '>
     <div className='bg-white p-6 rounded shadow w-80 text-center'>
      <h1 className='text-xl mb-4'>Todo App</h1>

      <input type="text"
      value={input}
      onChange={(e)=>setInput(e.target.value)}
      placeholder='Enter task' 
      className='border p-2 w-full mb-3'
      />
    

      <button className='bg-blue-500 text-white px-4 py-2 rounded w-full'
      onClick={addTodo}>Add</button>
       
      <ul className='mt-4'>
       {todos.map((todo,index)=>(
        <li key={index} className='flex justify-between border p-2 mb-4'
        >{todo}

        <button onClick={()=>deleteTodo(index)}
        className='text-red-500'
        >X</button>

        </li>
       ))} 
        </ul> 

     </div>
    </div>
  )
}

export default App

