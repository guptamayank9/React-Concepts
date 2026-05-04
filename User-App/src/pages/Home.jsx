import React from 'react'
import UserCard from '../Components/UserCard'

const Home = ({user}) => {
  return (
    <div>
      <h1>User</h1>
      {users.map((u)=>(
         <UserCard key={u.id} user={u}/>
      ))}
    </div>
  )
}

export default Home
