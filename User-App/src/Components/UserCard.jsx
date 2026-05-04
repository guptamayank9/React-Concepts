import React from 'react'
import { Link } from 'react-router-dom'

const UserCard = ({user}) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.city}</p>

      <Link to={`/profile/${user.id}`}>
      <button className='bg-blue-500 text-white px-2 mt-2'
      >View Profile</button>
      </Link>
    </div>
  )
}

export default UserCard
