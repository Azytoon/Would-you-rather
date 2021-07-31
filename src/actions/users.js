export const RECEIVE_USERS = 'RECEIVE_USERS'
export const UPDATE_USER_WHEN_ADD_QUESTION = 'UPDATE_USER_WHEN_ADD_QUESTION'
export const UPDATE_USER_WHEN_ADD_ANSWER = 'UPDATE_USER_WHEN_ADD_ANSWER'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function updateUser (user,questionId) {
  return {
    type: UPDATE_USER_WHEN_ADD_QUESTION,
    user,
    questionId,
  }
}
export function updateUserAnswer (answer) {
  return {
    type: UPDATE_USER_WHEN_ADD_ANSWER,
    answer,
  }
}