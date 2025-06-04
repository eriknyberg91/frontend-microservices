import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/ventixe-logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'


const Nav = () => {
  return (
    <nav>
      <div className="nav-header">
        <img src={logo} alt="Ventixe Logo" className="nav-logo" />
        <span className="nav-title">Ventixe</span>
      </div>
        <NavLink to="/" className="nav-link" >
          <FontAwesomeIcon className='fontawesome-icon' icon={faList} /> Events
        </NavLink>
    </nav>
  )
}

export default Nav
