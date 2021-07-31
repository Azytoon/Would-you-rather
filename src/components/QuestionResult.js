import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../utils/api'
import Nav from './Nav'
import { BsFillCaretLeftFill } from "react-icons/bs";

class QuestionResult extends Component {
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
      const { timestamp, optionOne, optionTwo } = question
      const questionTime = formatDate(timestamp)
      const text_one = optionOne.text
      const text_Two = optionTwo.text
      const vote1 = optionOne.votes.length
      const vote2 = optionTwo.votes.length
      const authedUser_answer = optionOne.votes.includes(question.author) ? 1 : 2
      const total = vote1 + vote2



      return (
        <React.Fragment>
          <Nav/>
          <div className='result'>
                  <img
                      src={avatarURL}
                      alt={`Avatar of ${authorName}`}
                      className='avatar'
                  />
               <div className='result_body'>
                      <span className='userName'>{authorName} asked</span>
                      <span> @ {questionTime} </span>
                          <p>Would you rather :</p>
                          <span>{text_one} ({vote1} of {total} choose this)</span>
                          <span>{authedUser_answer === 1?<BsFillCaretLeftFill/>: null}</span>
                          <div id="progress">
                              <span id="percent">{Math.round((vote1/total)*100 * 100) / 100}%</span>
                              <div id="bar" style={{width:`${(vote1/total)*100}%`}}></div>
                          </div>
                          <br/>
                          <span>{text_Two} ({vote2} of {total} choose this)</span>
                          <span>{authedUser_answer === 2?<BsFillCaretLeftFill/>: null}</span>
                          <div id="progress">
                              <span id="percent">{Math.round((vote2/total)*100 * 100) / 100}%</span>
                              <div id="bar" style={{width:`${(vote2/total)*100}%`}}></div>
                          </div>
                          
                         
              </div>
          </div>
        </React.Fragment>
      )
  }
  }
  function mapStateToProps ({ users, questions, authedUser } , props) {
    const { id } = props.match.params
    const question = questions[id]
    return {
      users,
      authedUser,
      question : question ? question : null,
    }
  }
  
  export default connect(mapStateToProps)(QuestionResult)
