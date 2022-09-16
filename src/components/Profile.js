import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import '../styles/profile.css'

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
        return <div>Loading...</div>
    }
  return (
    isAuthenticated && (
        <main className='profile' >
           <p className='user' > {user.name}</p>
            <img className='img' src={user.picture} alt={user.name} />
        
        </main >

  )
  )
}

export default Profile