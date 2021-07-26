import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LeaderBoard from './LeaderBoard'
import Home from './Home'
import LoadingBar from 'react-redux-loading'
import SignIn from './SignIn'
import NewQuestion from './NewQuestion'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
        <LoadingBar />
        {this.props.loading === true
          ? null
          : <React.Fragment>
              <LeaderBoard /> 
              <hr />
              <Home />
              <SignIn/>
              <NewQuestion/>
          </React.Fragment>
          }
      </div>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App) 