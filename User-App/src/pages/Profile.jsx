import React from 'react'
import { useParams } from 'react-router-dom'
import users from '../Data/users';

const Profile = () => {
    const {id} = useParams();
    const user = users.find((u)=>u.id === Number(id));


  return (

    <div className='p-4'>
      <h1>{user.name}</h1>
      <p>Age:{user.age}</p> 
      <p>City:{user.city}</p>
    </div>
  )
}

export default Profile
