import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'



class Nav extends Component {
  render() {
    const { userName, avatarURL } = this.props
    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/Home' exact activeClassName='active'>
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
              <span className = 'userName'>Hello, {userName} </span>
          </li>
          <li>
                  <img
                        src={avatarURL}
                        alt={`Avatar of ${userName}`}
                        className='avatarNav'
                    />
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
}
function mapStateToProps ({ authedUser , users}) {
  const userName = users[authedUser].name
  const avatarURL = users[authedUser].avatarURL
  return {
    userName,
    avatarURL,
  }
}
export default connect(mapStateToProps)(Nav)