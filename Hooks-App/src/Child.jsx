import React, { useContext } from 'react'
import { UserContext } from './Context/UserContext'

const Child = () => {

    const user = useContext(UserContext);
  return <h2 className='text-2xl p-20 ml-8'>User: {user.name}</h2>
}

export default Child
