import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../utils/api'
import Nav from './Nav'
import { Redirect } from 'react-router-dom'
import { handleAddAnswer } from '../actions/questions'

class Question extends Component {
    state = {
      answer: null,
      toResult: false
    }
    handleChange_one = (e) => {
      const answer = e.target.value
      this.setState(() => ({
        answer
      }))
    }
    handleChange_two = (e) => {
      const answer = e.target.value
      this.setState(() => ({
        answer
      }))
    }
    handleSubmit = (e, qid) => {
      e.preventDefault()
        //console.log("hamo")
        const { answer } = this.state
        const { dispatch } = this.props

        dispatch(handleAddAnswer (qid, answer))

        this.setState(() => ({
          answer: null,
          toResult: true
        }))
    }
    render() {
        const { users, question } = this.props
        const { answer, toResult } = this.state

        if (toResult === true) {
          return <Redirect to={`/question_result/${question.id}`}/>
        }

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


        return (
          <React.Fragment>
            <Nav/>
            <div className='user'>
                    <img
                        src={avatarURL}
                        alt={`Avatar of ${authorName}`}
                        className='avatar'
                    />
                 <div className='user-body'>
                        <span className='userName'>{authorName} asked</span>
                        <span> @ {questionTime} </span>
                        <form onSubmit={(e) => this.handleSubmit(e, question.id)}>
                            <p>Would you rather :</p>
                            <label>
                                <input  
                                type="radio" 
                                id="Option_One"
                                name="wyr" 
                                value='optionOne' 
                                onChange={this.handleChange_one}  
                                />
                                {text_one}
                            </label>
                            <br/>
                            <label>
                                <input 
                                type="radio" 
                                id="Option_Two"
                                 name="wyr" 
                                 value='optionTwo'
                                 onChange={this.handleChange_two} 
                                 />
                                {text_Two}
                            </label>
                            <br/>
                            <input type="submit" value="Submit" disabled = {answer === null}/>
                        </form>     
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
  
  export default connect(mapStateToProps)(Question)