import React from 'react'
import "./UserProfile.css"

const UserProfile = ({ name, photoURL }) => {
  return (
    <div className='user-profile'>
      <div className='user-image'>
        <img src={photoURL} alt="user" />
      </div>

      <div className='user-info'>
        <p className='user-name'>{name}</p>
      </div>
    </div>
  )
}

export default UserProfile