import React, { Component, Fragment } from 'react'
import { Route, Switch, Redirect,  BrowserRouter as Router } from "react-router-dom";
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LeaderBoard from './LeaderBoard'
import Home from './Home'
import LoadingBar from 'react-redux-loading'
import SignIn from './SignIn'
import NewQuestion from './NewQuestion'
import Question from './Question'
import QuestionResult from './QuestionResult';


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            {this.props.loading === true
              ?<React.Fragment>
                <Redirect to="/SignIn" />
                <Route path='/SignIn' component={SignIn} />
                </React.Fragment>
              : <React.Fragment>
                  <Switch>
                    <Route path='/LeaderBoard' exact component={LeaderBoard} />
                    <Route path='/question/:id'component={Question} />
                    <Route path='/question_result/:id'component={QuestionResult} />
                    <Route path='/newQuestion' component={NewQuestion} />
                    <Route path='/Home' component={Home} />
                    <Route path='/SignIn' component={SignIn} />
                    <Redirect to="/SignIn" />
                  </Switch>
                </React.Fragment>}
                
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App) 