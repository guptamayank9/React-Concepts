import React from 'react'
import users from '../Data/users';
import UserCard from '../Components/UserCard'

const Home = ({user}) => {
  return (
    <div className='grid gap-4 p-5'>
      <h1>User</h1>
      {users.map((u)=>(
         <UserCard key={u.id} user={u}/>
      ))}
    </div>
  )
}

export default Home
