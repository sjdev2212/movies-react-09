import React from 'react'
import Logout from './Logout'
import Profile from './Profile'
import { useAuth0 } from '@auth0/auth0-react';
import Login from './Login';
import List from './List'
import '../styles/home.css'



const Home = () => {
    const { isAuthenticated } = useAuth0();
  return (
   <main className="home">
    
         <h1 className='title'>Welcome to the movies database!</h1>
         <div>
         {isAuthenticated ? <>
            <Profile /> 
            <List/>
            <Logout />
         </> : <Login/>}
         </div>
    
      

   </main>
  )
}

export default Home