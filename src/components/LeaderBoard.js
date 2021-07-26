import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from './User'

class LeaderBoard extends Component {
  render() {
    return (
      <div>
        <h3 className='center'>Leader Board</h3>
        <ul className='dashboard-list'>
          {this.props.usersNames.map((id) => (
            <li key={id}>
              <User id={id}/>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ users }) {
  return {
    usersNames: Object.keys(users)
      .sort()
  }
}

export default connect(mapStateToProps)(LeaderBoard)