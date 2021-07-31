import React, { Component } from 'react'
import { connect } from 'react-redux'
import CompactQuestion from './CompactQuestion'
import Nav from './Nav'

class Home extends Component {
  state = {
    unanswered: true,
  }
  handleClick_answered = () => {
    this.setState(() => ({
      unanswered : false
    }))
  }
  handleClick_unanswered = () => {
    this.setState(() => ({
      unanswered : true
    }))
  }
  render() {
    const { users, questionsIds, authedUser} = this.props
    const { unanswered } = this.state
    let BackIds = []
    if (unanswered) {
      BackIds = questionsIds.filter((id) => !(Object.keys(users[authedUser].answers).includes(id)))
    }
    else {
      BackIds = questionsIds.filter((id) => (Object.keys(users[authedUser].answers).includes(id)))
    }
    return (      
      <React.Fragment>
        <Nav />
          <div className= 'switch_buttons_container'>
          <h3 className='center'>Your Timeline</h3>   
          
          <button onClick={this.handleClick_unanswered} className= {unanswered?'clicked':'non_clicked'}>Unanswered Questions</button>
          <button onClick={this.handleClick_answered} className= {unanswered?'non_clicked':'clicked'}>Answered Questions</button>   
          
          <ul className='dashboard-list'>
            {BackIds.map((id) => (
              <li key={id}>
                <CompactQuestion id={id} status={unanswered}/>
              </li>
            ))}
          </ul>
        </div>
      </React.Fragment>
    )
  }
}

function mapStateToProps ({ questions, authedUser, users}) {
  return {
    questionsIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
    users,
    authedUser
  }
}

export default connect(mapStateToProps)(Home)