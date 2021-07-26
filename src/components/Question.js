import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../utils/api'

class Question extends Component {
    handleSubmit = (e) => {
      e.preventDefault()
        console.log("hamo")
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
        const { timestamp, optionOne, optionTwo } = question
        const questionTime = formatDate(timestamp)
        const text_one = optionOne.text
        const text_Two = optionTwo.text


        return (
            <div className='user'>
                    <img
                        src={avatarURL}
                        alt={`Avatar of ${authorName}`}
                        className='avatar'
                    />
                 <div className='user-body'>
                        <span className='userName'>{authorName} asked</span>
                        <span> @ {questionTime} </span>
                        <form onSubmit={this.handleSubmit}>
                            <p>Would you rather :</p>
                            <label>
                                <input  type="radio" id="Option_One" name="wyr" value={text_one} />
                                {text_one}
                            </label>
                            <br/>
                            <label>
                            <   input type="radio" id="Option_Two" name="wyr" value={text_Two}/>
                                {text_Two}
                            </label>
                            <br/>
                            <input type="submit" value="Submit"/>
                        </form>     
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
  
  export default connect(mapStateToProps)(Question)