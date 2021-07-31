import { saveQuestion, saveQuestionAnswer } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import { updateUser, updateUserAnswer } from './users'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_ QUESTION'
export const ADD_ANSWER = 'ADD_ANSWER'

function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}
function addAnswer (answer) {
  return {
    type: ADD_ANSWER,
    answer,
  }
}

export function handleAddQuestion (text_one, text_two) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    dispatch(showLoading())
    const new_question = { optionOneText : text_one, optionTwoText : text_two, author : authedUser}
    return saveQuestion(new_question)
      .then((question) => {
        dispatch(addQuestion(question))
        dispatch(updateUser(authedUser,question.id))
      })
      .then(() => dispatch(hideLoading()))
  }
}

export function handleAddAnswer ( qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    dispatch(showLoading())
    const new_answer = { authedUser, qid, answer }
    return saveQuestionAnswer(new_answer)
      .then(() => {
        dispatch(addAnswer(new_answer))
        dispatch(updateUserAnswer(new_answer))
      })
      .then(() => dispatch(hideLoading()))
  }
}

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}