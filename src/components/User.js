import React, { Component } from 'react'
import { connect } from 'react-redux'

class User extends Component {
    render() {
        const { user } = this.props

        if (user === null) {
          return <p>This User doesn't existd</p>
        }
    
        const {
          name, avatarURL, answers, questions
        } = user

        const Answered_Questions = Object.keys(answers).length
        const Created_Questions = questions.length
        const Score = Answered_Questions + Created_Questions

        return (
            <div className='user'>
                    <img
                        src={avatarURL}
                        alt={`Avatar of ${name}`}
                        className='avatar'
                    />
                 <div className='user-body'>
                        <span className='userName'>{name} </span>
                        <span className='user-info'> Answered Questions: {Answered_Questions}</span>
                        <span className='user-info'> Created Questions: {Created_Questions} </span>
                        <span className='user-info'> Score: {Score} </span>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({ users }, { id }) {
    const user = users[id]

    return {
      user : user ? user : null
    }
  }
  
  export default connect(mapStateToProps)(User)
