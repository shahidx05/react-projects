import React from 'react'
import { UseUser } from '../context/UserContext'

const Profile = () => {
    const {user} = UseUser();

  return (
    <div>
      {!user ? "Please log in" : `Welcome, ${user}`}
    </div>
  )
}

export default Profile