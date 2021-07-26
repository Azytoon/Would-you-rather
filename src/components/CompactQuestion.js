import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../utils/api'

class CompactQuestion extends Component {
    handleClick = (e) => {
      e.preventDefault()

      // todo: Handle Like Tweet
    }
    render() {
        const { users, question } = this.props

        if (question === null) {
          return <p>This Question doesn't existd</p>
        }
        //get who ask question
        const authorName = users[question.author].name
        //get avatar of him
        const avatarURL = users[question.author].avatarURL
        //get time of question
        const { timestamp } = question
        const questionTime = formatDate(timestamp)


        return (
            <div className='user'>
                    <img
                        src={avatarURL}
                        alt={`Avatar of ${authorName}`}
                        className='avatar'
                    />
                 <div className='user-body'>
                        <span className='userName'>{authorName} asked</span>
                        <span className='user-info'> @ {questionTime} </span>
                        <span className='user-info'> Would you rather ... </span>
                        <button onClick={this.handleClick}> view poll </button>         
                </div>
            </div>
        )
    }
}

function mapStateToProps ({ users, questions, authedUser }, { id }) {
    const question = questions[id]

    return {
      users,
      authedUser,
      question : question ? question : null
    }
  }
  
  export default connect(mapStateToProps)(CompactQuestion)