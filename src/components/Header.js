import React from 'react'
import{Link} from 'react-router-dom'
import Searcher from "./Searcher";
import '../styles/header.css'

const Header = () => {
  return (
  <nav className="header">
     <ul  className="header-ul">
       <li>
         <Link  className="header-li" to='/'>Home</Link>
       </li>
       <li>
         <Link  className="header-li" to='/list'>Movie List</Link>
       </li>
       <li>
         <Link  className="header-li"  to='/favoritos'>Favorites</Link>
       </li>
     </ul>
      <Searcher />
  </nav>

  )
}

export default Header