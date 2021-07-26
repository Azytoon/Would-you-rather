import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { handleAddTweet } from '../actions/tweets'
//import { Redirect } from 'react-router-dom'

class NewQuestion extends Component {
  state = {
    text_one: '',
    text_two: '',
    toHome: false,
  }
  handleChange_one = (e) => {
    //const text = e.target.value
/*
    this.setState(() => ({
      text
    }))*/
  }
  handleChange_two = (e) => {
    //const text = e.target.value
/*
    this.setState(() => ({
      text
    }))*/
  }
  handleSubmit = (e) => {
    e.preventDefault()

   /* const { text } = this.state
    const { dispatch, id } = this.props

    dispatch(handleAddTweet(text, id))

    this.setState(() => ({
      text: '',
      toHome: id ? false : true,
    }))
    */
  }
  render() {
    const { text_one, text_two} = this.state

    /* todo: Redirect to / if submitted */
    /*if (toHome === true) {
      return <Redirect to='/' />
    }

    const tweetLeft = 280 - text.length*/

    return (
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
    )
  }
}

export default connect()(NewQuestion) 