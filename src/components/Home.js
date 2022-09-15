import React from 'react'
import Logout from './Logout'
import Profile from './Profile'
import { useAuth0 } from '@auth0/auth0-react';
import Login from './Login';


const Home = () => {
    const { isAuthenticated } = useAuth0();
  return (
   <main>
         {isAuthenticated ? <>
            <Profile /> 
            <Logout />
         </> : <Login/>}
    
      
         <h1>Welcome to the movies database!</h1>

   </main>
  )
}

export default Home