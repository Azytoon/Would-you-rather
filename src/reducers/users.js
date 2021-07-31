import { RECEIVE_USERS , UPDATE_USER_WHEN_ADD_QUESTION, UPDATE_USER_WHEN_ADD_ANSWER } from '../actions/users'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case UPDATE_USER_WHEN_ADD_QUESTION :
    return {
      ...state,
      [action.user]: {
        ...state[action.user],
        questions: state[action.user].questions.concat([action.questionId])
      }
    }
    case UPDATE_USER_WHEN_ADD_ANSWER:
      const { answer, qid, authedUser } = action.answer
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer
          }
        }
      }

    default :
      return state
  }
}