import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav () {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/newQuestion' exact activeClassName='active'>
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to='/LeaderBoard' exact activeClassName='active'>
            Leader Board
          </NavLink>
        </li>
        <li>
          <NavLink to='/SignIn' activeClassName='active'>
            LogOut
          </NavLink>
        </li>
      </ul>
    </nav>
  )
} 