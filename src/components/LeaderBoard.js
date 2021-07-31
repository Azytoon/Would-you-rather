import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from './User'
import Nav from './Nav'

class LeaderBoard extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
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
        </React.Fragment>
    )
  }
}


function mapStateToProps ({ users }) {
  return {
    usersNames: Object.keys(users)
      .sort((a,b) => {
        const score_b = Object.keys(users[b].answers).length+ (users[b].questions.length)
        const score_a = Object.keys(users[a].answers).length+ (users[a].questions.length)
        return (score_b - score_a)
      })
  }
}

export default connect(mapStateToProps)(LeaderBoard)