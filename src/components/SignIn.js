import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'

class SignIn extends Component {
    state = {
        option: '',
      }
    handleSubmit = (e) => {
        e.preventDefault()
        const { option } = this.state
        const { dispatch } = this.props

        dispatch(setAuthedUser(option))

        this.setState(() => ({
            option: ''
        }))
        this.props.history.push(`/Home`)
    }
    handleChange = (e) => {
        const option = e.target.value
        this.setState(() => ({
          option
        }))
    }
    render() {
        const { usersNames } = this.props
        const { option } = this.state

        return (
            <div className='signIn_container'>
                <div className='signIn_info'>
                    <div className='signIn_title'>
                        <h2> Welcome to Would you rather App!<br />
                        Please, LogIn To Continue</h2>
                    </div>
                    <img
                        src='react_redux.jpeg'
                        alt={`react_redux_Img`}
                        className='react_redux'
                    />
                    <form className='center'  onSubmit={this.handleSubmit}>
                        <label>
                        <p className='signText'>SignIn</p>
                        <select  defaultValue={option} onChange={this.handleChange}>
                            <option  disabled key='none' value="">select user</option>
                            {usersNames.map((name) => (
                                <option key={name}  value={name}>
                                    {name}
                                </option>
                            ))}
                        </select>
                        </label>
                        <br /><br />
                        <input type="submit" value="Submit" disabled = {option === ''} />
                    </form>
                </div>
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
  
  export default withRouter(connect(mapStateToProps)(SignIn))