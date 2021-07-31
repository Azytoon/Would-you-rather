import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'
import Nav from './Nav'

class NewQuestion extends Component {
  state = {
    text_one: '',
    text_two: '',
    toHome: false,
  }
  handleChange_one = (e) => {
    const text_one = e.target.value
    this.setState(() => ({
      text_one
    }))
  }
  handleChange_two = (e) => {
    const text_two = e.target.value
    this.setState(() => ({
      text_two
    }))
  }
  handleSubmit = (e) => {
    e.preventDefault()
    //console.log(this.props)
    const { text_one, text_two } = this.state
    const { dispatch } = this.props

    dispatch(handleAddQuestion(text_one, text_two))

    this.setState(() => ({
      text: '',
      toHome: true,
    }))
    
  }
  render() {
    const { text_one, text_two, toHome } = this.state

    /* todo: Redirect to / if submitted */
    if (toHome === true) {
      return <Redirect to='/Home' />
    }

    /*const tweetLeft = 280 - text.length*/

    return (
      <React.Fragment>
        <Nav/>
        <div className='new_question'>
          <h3 className='center'>Create New Question</h3>
                <form className='center' onSubmit={this.handleSubmit}>
                    <p>Would you rather ...</p>
                        <input  
                          type="text" 
                          id="Option_One"
                          placeholder="Enter Option One Text Here"
                          onChange={this.handleChange_one} 
                          maxLength={100}
                          value={text_one} />
                    <br/>  <br/>
                        <input  
                            type="text" 
                            id="Option_Two"
                            placeholder="Enter Option Two Text Here"
                            onChange={this.handleChange_two}
                            maxLength={100} 
                            value={text_two} />
                    <br/>  <br/>
                    <button
                          type='submit'
                          disabled={text_one === '' || text_two === ''}>
                            Submit
                    </button>
                </form>     
            </div>
          </React.Fragment>  
    )
  }
}

export default connect()(NewQuestion) 